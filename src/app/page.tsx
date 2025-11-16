"use client";

import { useState } from "react";
import { Layout, Typography } from "antd";
import CodeInput from "@/components/CodeInput";
import Preview from "@/components/Preview";
import Actions from "@/components/Actions";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function Home() {
  const [code, setCode] = useState("");
  const [docConfig, setDocConfig] = useState<any>(null);
  const [generatedBlob, setGeneratedBlob] = useState<Blob | null>(null);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8e8e8",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Title level={3} style={{ margin: 0, color: "#2c3e50" }}>
          Codoxc
        </Title>
        <Text type="secondary" style={{ marginLeft: 16 }}>
          JavaScript to Word Converter
        </Text>
      </Header>

      <Content style={{ padding: "24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
    </Layout>
  );
}
