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
          background: "#ffffff",
          borderBottom: "1px solid #d9d9d9",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          height: "64px",
        }}
      >
        <Space size={12}>
          <Title level={3} style={{ margin: 0, color: "#1a1a1a", fontWeight: 600, letterSpacing: "-0.02em" }}>
            CODOXC
          </Title>
          <Text type="secondary" style={{ display: "inline-block", fontSize: 14 }}>
            JavaScript to Word Converter
          </Text>
        </Space>
        <Space wrap size={12}>
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

      <Content style={{ padding: "32px", flex: 1, background: "#f5f5f5" }}>
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
          background: "#ffffff",
          borderTop: "1px solid #d9d9d9",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 8 }}>
            <Text strong style={{ fontSize: 15, color: "#1a1a1a", fontWeight: 600 }}>
              © TienHover - CODOXC
            </Text>
          </div>
          <Text type="secondary" style={{ fontSize: 13 }}>
            JavaScript to Word Converter - Powered by{" "}
            <a
              href="https://docx.js.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0066FF", textDecoration: "none", fontWeight: 500 }}
            >
              docx
            </a>{" "}
            library
          </Text>
        </div>
      </Footer>

      <HelpModal open={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
    </Layout>
  );
}
