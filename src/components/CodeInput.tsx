"use client";

import { ClearOutlined, UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Card, Input, Space, Typography, Upload, message } from "antd";

const { TextArea } = Input;
const { Text } = Typography;

interface CodeInputProps {
  code: string;
  setCode: (code: string) => void;
}

export default function CodeInput({ code, setCode }: CodeInputProps) {
  const uploadProps: UploadProps = {
    accept: ".js,.txt",
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setCode(content);
        message.success(`File "${file.name}" loaded successfully`);
      };
      reader.onerror = () => {
        message.error("Error reading file");
      };
      reader.readAsText(file);
      return false;
    },
    showUploadList: false,
    maxCount: 1,
  };

  const handleClear = () => {
    setCode("");
    message.info("Code cleared");
  };

  return (
    <Card
      title="Code Input"
      extra={
        <Space>
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />} className="upload-btn">
              Upload File
            </Button>
          </Upload>
          <Button
            icon={<ClearOutlined />}
            onClick={handleClear}
            disabled={!code}
          >
            Clear
          </Button>
        </Space>
      }
      style={{ marginBottom: 24, background: "#ffffff" }}
    >
      <Space direction="vertical" style={{ width: "100%" }} size="middle">
        <Text type="secondary">
          Paste your JavaScript code here or upload a .js/.txt file
        </Text>
        <TextArea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="const documentConfig = {
  sections: [
    {
      children: [
        {
          type: 'heading',
          text: 'My Document',
          level: 1
        }
      ]
    }
  ]
};"
          rows={15}
          style={{
            fontFamily: "monospace",
            fontSize: 14,
          }}
        />
        <Text type="secondary">{code.length} characters</Text>
      </Space>
    </Card>
  );
}
