"use client";

import { Card, Descriptions, Typography } from "antd";

const { Text } = Typography;

interface PreviewProps {
  config: any;
  generatedBlob: Blob | null;
}

export default function Preview({ config, generatedBlob }: PreviewProps) {
  return (
    <Card title="Preview" style={{ marginBottom: 24 }}>
      <Descriptions column={1} bordered size="small">
        <Descriptions.Item label="Document Title">
          {config.title || "Untitled"}
        </Descriptions.Item>
        <Descriptions.Item label="Sections">
          {config.sections?.length || 0}
        </Descriptions.Item>
        <Descriptions.Item label="Has Styles">
          {config.styles ? "Yes" : "No"}
        </Descriptions.Item>
        <Descriptions.Item label="Total Elements">
          {config.sections?.reduce(
            (acc: number, section: any) => acc + (section.children?.length || 0),
            0
          ) || 0}
        </Descriptions.Item>
        {generatedBlob && (
          <Descriptions.Item label="File Size">
            {(generatedBlob.size / 1024).toFixed(2)} KB
          </Descriptions.Item>
        )}
      </Descriptions>

      <div style={{ marginTop: 16 }}>
        <Text type="secondary">
          Your document is ready to download. Click the "Download .docx" button
          above.
        </Text>
      </div>
    </Card>
  );
}
