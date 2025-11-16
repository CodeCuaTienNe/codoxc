'use client';

import React from 'react';
import { Modal, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { GETTING_STARTED_GUIDE, PROMPT_FORMAT_GUIDE, FORMAT_REFERENCE } from '@/constants/help';

interface HelpModalProps {
  open: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ open, onClose }) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Getting Started',
      children: (
        <div className="help-content">
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
            {GETTING_STARTED_GUIDE}
          </pre>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Format Guide',
      children: (
        <div className="help-content">
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
            {PROMPT_FORMAT_GUIDE}
          </pre>
        </div>
      ),
    },
    {
      key: '3',
      label: 'Reference',
      children: (
        <div className="help-content">
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
            {FORMAT_REFERENCE}
          </pre>
        </div>
      ),
    },
  ];

  return (
    <Modal
      title="Documentation & Help"
      open={open}
      onCancel={onClose}
      footer={null}
      width="90%"
      style={{ maxWidth: 900 }}
      className="help-modal"
    >
      <Tabs defaultActiveKey="1" items={items} />
    </Modal>
  );
};

export default HelpModal;
