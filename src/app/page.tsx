"use client";

import Actions from "@/components/Actions";
import CodeInput from "@/components/CodeInput";
import HelpModal from "@/components/HelpModal";
import Preview from "@/components/Preview";
import SampleSelector from "@/components/SampleSelector";
import { FileTextOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Layout, Space, Typography } from "antd";
import { useState } from "react";

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
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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
        <Space wrap>
          <Button
            icon={<FileTextOutlined />}
            onClick={() => setShowSamples(!showSamples)}
            className="show-samples-btn"
            size="large"
          >
            {showSamples ? "Hide Samples" : "Show Samples"}
          </Button>
          <Button
            type="primary"
            icon={<QuestionCircleOutlined />}
            onClick={() => setHelpModalOpen(true)}
            size="large"
            className="help-guide-btn"
          >
            Help & Guide
          </Button>
        </Space>
      </Header>

      <Content style={{ padding: "16px 24px", flex: 1 }}>
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

      <Footer
        style={{
          textAlign: "center",
          background: "#fff",
          borderTop: "1px solid #e8e8e8",
          padding: "24px 16px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 8 }}>
            <Text strong style={{ fontSize: 16, color: "#2c3e50" }}>
              © TienHover - Codoxc
            </Text>
          </div>
          <Text type="secondary" style={{ fontSize: 14 }}>
            JavaScript to Word Converter - Powered by{" "}
            <a
              href="https://docx.js.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#B8D8E8", textDecoration: "none" }}
            >
              docx
            </a>{" "}
            library
          </Text>
          <div style={{ marginTop: 8 }}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Built with Next.js, TypeScript & Ant Design
            </Text>
          </div>
        </div>
      </Footer>

      <HelpModal open={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
    </Layout>
  );
}
