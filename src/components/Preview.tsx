"use client";

import { Card, Descriptions, Typography, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import {
  TOOLTIP_TITLE,
  TOOLTIP_SECTIONS,
  TOOLTIP_STYLES,
  TOOLTIP_ELEMENTS,
  TOOLTIP_FILE_SIZE,
} from "@/constants/help";

const { Text } = Typography;

interface PreviewProps {
  config: any;
  generatedBlob: Blob | null;
}

export default function Preview({ config, generatedBlob }: PreviewProps) {
  const LabelWithTooltip = ({ label, tooltip }: { label: string; tooltip: string }) => (
    <span>
      {label}{' '}
      <Tooltip title={tooltip}>
        <QuestionCircleOutlined style={{ color: '#0066FF', cursor: 'help' }} />
      </Tooltip>
    </span>
  );

  return (
    <Card title="Preview" style={{ marginBottom: 24, background: "#ffffff" }}>
      <Descriptions column={1} bordered size="small">
        <Descriptions.Item label={<LabelWithTooltip label="Document Title" tooltip={TOOLTIP_TITLE} />}>
          {config.title || "Untitled"}
        </Descriptions.Item>
        <Descriptions.Item label={<LabelWithTooltip label="Sections" tooltip={TOOLTIP_SECTIONS} />}>
          {config.sections?.length || 0}
        </Descriptions.Item>
        <Descriptions.Item label={<LabelWithTooltip label="Has Styles" tooltip={TOOLTIP_STYLES} />}>
          {config.styles ? "Yes" : "No"}
        </Descriptions.Item>
        <Descriptions.Item label={<LabelWithTooltip label="Total Elements" tooltip={TOOLTIP_ELEMENTS} />}>
          {config.sections?.reduce(
            (acc: number, section: any) => acc + (section.children?.length || 0),
            0
          ) || 0}
        </Descriptions.Item>
        {generatedBlob && (
          <Descriptions.Item label={<LabelWithTooltip label="File Size" tooltip={TOOLTIP_FILE_SIZE} />}>
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
