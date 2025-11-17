'use client';

import React from 'react';
import { Card, Button, Row, Col, Typography } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { SAMPLES } from '@/constants/samples';

const { Text } = Typography;

interface SampleSelectorProps {
  onSelect: (code: string) => void;
}

const SampleSelector: React.FC<SampleSelectorProps> = ({ onSelect }) => {
  return (
    <Card
      title="Sample Templates"
      className="sample-selector-card"
      style={{ marginBottom: 24, background: "#ffffff" }}
    >
      <Row gutter={[16, 16]}>
        {SAMPLES.map((sample) => (
          <Col xs={24} sm={12} md={8} lg={6} key={sample.id}>
            <Card
              hoverable
              className="sample-card"
              onClick={() => onSelect(sample.code)}
            >
              <div style={{ textAlign: 'center' }}>
                <FileTextOutlined style={{ fontSize: 28, marginBottom: 8, color: '#0066FF' }} />
                <div style={{ fontWeight: 600, marginBottom: 4, fontSize: 14 }}>
                  {sample.name}
                </div>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {sample.description}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default SampleSelector;
