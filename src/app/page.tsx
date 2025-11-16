"use client";

import { useState } from "react";
import { Layout, Typography, Button, Space } from "antd";
import { QuestionCircleOutlined, FileTextOutlined } from "@ant-design/icons";
import CodeInput from "@/components/CodeInput";
import Preview from "@/components/Preview";
import Actions from "@/components/Actions";
import HelpModal from "@/components/HelpModal";
import SampleSelector from "@/components/SampleSelector";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function Home() {
  const [code, setCode] = useState("");
  const [docConfig, setDocConfig] = useState<any>(null);
  const [generatedBlob, setGeneratedBlob] = useState<Blob | null>(null);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [showSamples, setShowSamples] = useState(true);

  const handleSampleSelect = (sampleCode: string) => {
    setCode(sampleCode);
    setShowSamples(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8e8e8",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Space>
          <Title level={3} style={{ margin: 0, color: "#2c3e50" }}>
            Codoxc
          </Title>
          <Text type="secondary" style={{ display: "inline-block" }}>
            JavaScript to Word Converter
          </Text>
        </Space>
        <Space>
          <Button
            icon={<FileTextOutlined />}
            onClick={() => setShowSamples(!showSamples)}
          >
            {showSamples ? "Hide Samples" : "Show Samples"}
          </Button>
          <Button
            type="primary"
            icon={<QuestionCircleOutlined />}
            onClick={() => setHelpModalOpen(true)}
          >
            Help & Guide
          </Button>
        </Space>
      </Header>

      <Content style={{ padding: "16px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {showSamples && <SampleSelector onSelect={handleSampleSelect} />}

          <CodeInput code={code} setCode={setCode} />

          <Actions
            code={code}
            setDocConfig={setDocConfig}
            setGeneratedBlob={setGeneratedBlob}
          />

          {docConfig && (
            <Preview config={docConfig} generatedBlob={generatedBlob} />
          )}
        </div>
      </Content>

      <Footer style={{ textAlign: "center", background: "#fafafa" }}>
        <Text type="secondary">
          Codoxc - Powered by docx library
        </Text>
      </Footer>

      <HelpModal open={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
    </Layout>
  );
}
