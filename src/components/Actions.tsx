"use client";

import { Button, Space, message, Tooltip } from "antd";
import { FileWordOutlined, DownloadOutlined } from "@ant-design/icons";
import { parseCode } from "@/lib/parser";
import { generateDocument } from "@/lib/generator";
import { useState } from "react";
import { TOOLTIP_GENERATE, TOOLTIP_DOWNLOAD } from "@/constants/help";

interface ActionsProps {
  code: string;
  setDocConfig: (config: any) => void;
  setGeneratedBlob: (blob: Blob | null) => void;
}

export default function Actions({
  code,
  setDocConfig,
  setGeneratedBlob,
}: ActionsProps) {
  const [loading, setLoading] = useState(false);
  const [blob, setBlob] = useState<Blob | null>(null);

  const handleGenerate = async () => {
    if (!code.trim()) {
      message.warning("Please enter some code first");
      return;
    }

    setLoading(true);
    try {
      // Parse code
      const config = parseCode(code);
      setDocConfig(config);

      // Generate document
      const generatedBlob = await generateDocument(config);
      setBlob(generatedBlob);
      setGeneratedBlob(generatedBlob);

      message.success("Document generated successfully!");
    } catch (error: any) {
      message.error(`Error: ${error.message}`);
      console.error("Generation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!blob) {
      message.warning("Please generate document first");
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.docx";
    link.click();
    URL.revokeObjectURL(url);

    message.success("Document downloaded!");
  };

  return (
    <Space size="middle" style={{ marginBottom: 24 }} wrap>
      <Tooltip title={TOOLTIP_GENERATE}>
        <Button
          type="primary"
          icon={<FileWordOutlined />}
          onClick={handleGenerate}
          loading={loading}
          size="large"
        >
          Generate Word Document
        </Button>
      </Tooltip>

      <Tooltip title={TOOLTIP_DOWNLOAD}>
        <Button
          icon={<DownloadOutlined />}
          onClick={handleDownload}
          disabled={!blob}
          size="large"
        >
          Download .docx
        </Button>
      </Tooltip>
    </Space>
  );
}
