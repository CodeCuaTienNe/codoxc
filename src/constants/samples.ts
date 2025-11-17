// Sample document configurations for demonstration

export const SAMPLE_BASIC = `const documentConfig = {
  title: "Basic Document Example",
  sections: [
    {
      children: [
        {
          type: 'heading',
          text: 'Welcome to Codoxc',
          level: 1,
          options: {
            alignment: 'center'
          }
        },
        {
          type: 'spacer',
          height: 200
        },
        {
          type: 'paragraph',
          text: 'This is a simple paragraph demonstrating basic text formatting.',
          alignment: 'left'
        },
        {
          type: 'paragraph',
          text: [
            { text: 'You can use ', bold: false },
            { text: 'bold', bold: true },
            { text: ', ', bold: false },
            { text: 'italic', italic: true },
            { text: ', and ', bold: false },
            { text: 'colored', color: '0066CC' },
            { text: ' text.' }
          ]
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_RESUME = `const documentConfig = {
  title: "Professional Resume",
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 720,
            right: 720,
            bottom: 720,
            left: 720
          }
        }
      },
      children: [
        // Header Section
        {
          type: 'heading',
          text: 'JOHN DOE',
          level: 1,
          options: {
            alignment: 'center'
          }
        },
        {
          type: 'paragraph',
          text: 'Full Stack Developer | john.doe@email.com | +1 234 567 890',
          alignment: 'center'
        },
        {
          type: 'spacer',
          height: 300
        },

        // Professional Summary
        {
          type: 'heading',
          text: 'Professional Summary',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Proficient in React, Node.js, and cloud technologies.'
        },
        {
          type: 'spacer',
          height: 200
        },

        // Two-Column Layout for Skills and Experience
        {
          type: 'table',
          columnWidths: [4680, 4680],
          borders: 'none',
          rows: [
            {
              cells: [
                {
                  content: [
                    {
                      type: 'heading',
                      text: 'Technical Skills',
                      level: 3
                    },
                    {
                      type: 'paragraph',
                      text: '• JavaScript/TypeScript\\n• React & Next.js\\n• Node.js & Express\\n• PostgreSQL & MongoDB\\n• AWS & Docker'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                },
                {
                  content: [
                    {
                      type: 'heading',
                      text: 'Languages',
                      level: 3
                    },
                    {
                      type: 'paragraph',
                      text: '• English (Fluent)\\n• Spanish (Intermediate)\\n• Vietnamese (Native)'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },

        // Experience Section
        {
          type: 'heading',
          text: 'Work Experience',
          level: 2
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Senior Developer', bold: true },
            { text: ' | Tech Company Inc. | 2020 - Present' }
          ]
        },
        {
          type: 'paragraph',
          text: '• Led development of microservices architecture\\n• Improved application performance by 40%\\n• Mentored junior developers'
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_TABLE = `const documentConfig = {
  title: "Table Example",
  sections: [
    {
      children: [
        {
          type: 'heading',
          text: 'Product Comparison Table',
          level: 1
        },
        {
          type: 'spacer',
          height: 200
        },
        {
          type: 'table',
          columnWidths: [2340, 2340, 2340, 2340],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Product', bold: true },
                    alignment: 'center'
                  },
                  width: 2340,
                  verticalAlign: 'center',
                  shading: { fill: '4472C4' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Price', bold: true },
                    alignment: 'center'
                  },
                  width: 2340,
                  verticalAlign: 'center',
                  shading: { fill: '4472C4' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Rating', bold: true },
                    alignment: 'center'
                  },
                  width: 2340,
                  verticalAlign: 'center',
                  shading: { fill: '4472C4' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Stock', bold: true },
                    alignment: 'center'
                  },
                  width: 2340,
                  verticalAlign: 'center',
                  shading: { fill: '4472C4' }
                }
              ]
            },
            {
              cells: [
                { content: 'Laptop Pro', width: 2340 },
                { content: '$999', width: 2340 },
                { content: '4.5/5', width: 2340 },
                { content: 'In Stock', width: 2340 }
              ]
            },
            {
              cells: [
                { content: 'Phone X', width: 2340 },
                { content: '$699', width: 2340 },
                { content: '4.8/5', width: 2340 },
                { content: 'In Stock', width: 2340 }
              ]
            },
            {
              cells: [
                { content: 'Tablet Mini', width: 2340 },
                { content: '$399', width: 2340 },
                { content: '4.2/5', width: 2340 },
                { content: 'Out of Stock', width: 2340 }
              ]
            }
          ]
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_SRS = `const documentConfig = {
  title: "Software Requirements Specification (SRS) Sample",
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 720,
            right: 720,
            bottom: 720,
            left: 720
          }
        }
      },
      children: [
        // Title Page
        {
          type: 'heading',
          text: 'Software Requirements Specification (SRS)',
          level: 1,
          options: {
            alignment: 'center'
          }
        },
        {
          type: 'spacer',
          height: 400
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Project Name: ', bold: true },
            { text: 'Sample Application' },
            { text: '\\nVersion: ', bold: true },
            { text: '1.0' },
            { text: '\\nDate: ', bold: true },
            { text: 'October 2023' }
          ],
          alignment: 'center'
        },
        {
          type: 'spacer',
          height: 600
        },

        // 1. Introduction
        {
          type: 'heading',
          text: '1. Introduction',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'This Software Requirements Specification (SRS) document describes the functional and non-functional requirements for the Sample Application. The purpose of this document is to provide a detailed description of the system to be developed.'
        },
        {
          type: 'spacer',
          height: 200
        },
        {
          type: 'paragraph',
          text: [
            { text: '1.1 Purpose\\n', bold: true },
            { text: 'The purpose of the Sample Application is to demonstrate a basic user management system with login, registration, and profile management features.' }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },
        {
          type: 'paragraph',
          text: [
            { text: '1.2 Scope\\n', bold: true },
            { text: 'The application will include user authentication, profile editing, and basic data storage. It will not include advanced features like payment processing or third-party integrations.' }
          ]
        },

        // 2. Overall Description
        {
          type: 'heading',
          text: '2. Overall Description',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'This section provides a high-level overview of the product features and constraints.'
        },
        {
          type: 'spacer',
          height: 200
        },

        // Table: Product Features
        {
          type: 'table',
          columnWidths: [3000, 6360],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Feature', bold: true, size: 28 },
                    alignment: 'center'
                  },
                  width: 3000,
                  verticalAlign: 'center',
                  shading: { fill: 'E0E0E0' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Description', bold: true, size: 28 },
                    alignment: 'center'
                  },
                  width: 6360,
                  verticalAlign: 'center',
                  shading: { fill: 'E0E0E0' }
                }
              ]
            },
            {
              cells: [
                { content: 'User Registration', width: 3000 },
                { content: 'Allow new users to create accounts with email and password.', width: 6360 }
              ]
            },
            {
              cells: [
                { content: 'Login', width: 3000 },
                { content: 'Authenticate existing users with email and password.', width: 6360 }
              ]
            },
            {
              cells: [
                { content: 'Profile Management', width: 3000 },
                { content: 'Enable users to view and edit their profile information.', width: 6360 }
              ]
            }
          ]
        },

        // 3. Specific Requirements
        {
          type: 'heading',
          text: '3. Specific Requirements',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'This section details the functional requirements of the system.'
        },
        {
          type: 'spacer',
          height: 200
        },

        // 3.1 External Interface Requirements
        {
          type: 'heading',
          text: '3.1 External Interface Requirements',
          level: 3
        },
        {
          type: 'paragraph',
          text: 'The application shall provide a web-based user interface accessible via standard browsers.'
        },
        {
          type: 'spacer',
          height: 200
        },

        // Two-Column Layout for Requirements
        {
          type: 'table',
          columnWidths: [4680, 4680],
          borders: 'none',
          rows: [
            {
              cells: [
                // Left Column
                {
                  content: [
                    {
                      type: 'paragraph',
                      text: { text: '3.2 Functional Requirements', bold: true, size: 28 }
                    },
                    {
                      type: 'paragraph',
                      text: 'FR1: The system shall allow users to register with a unique email and password.\\nFR2: The system shall validate user input during registration.\\nFR3: The system shall send a confirmation email upon successful registration.'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                },
                // Right Column
                {
                  content: [
                    {
                      type: 'paragraph',
                      text: { text: '3.3 Non-Functional Requirements', bold: true, size: 28 }
                    },
                    {
                      type: 'paragraph',
                      text: 'NFR1: The application shall respond to user actions within 2 seconds.\\nNFR2: The system shall support at least 1000 concurrent users.\\nNFR3: Data shall be encrypted in transit and at rest.'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                }
              ]
            }
          ]
        },

        // 4. Appendices
        {
          type: 'heading',
          text: '4. Appendices',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'Appendix A: Glossary\\n- SRS: Software Requirements Specification\\n- UI: User Interface'
        },
        {
          type: 'spacer',
          height: 200
        },
        {
          type: 'paragraph',
          text: 'This concludes the SRS document. All requirements are subject to change based on project needs.'
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_FORMATTED_TEXT = `const documentConfig = {
  title: "Text Formatting Examples",
  sections: [
    {
      children: [
        {
          type: 'heading',
          text: 'Text Formatting Examples',
          level: 1
        },
        {
          type: 'spacer',
          height: 200
        },

        // Bold and Italic
        {
          type: 'heading',
          text: 'Bold and Italic',
          level: 2
        },
        {
          type: 'paragraph',
          text: [
            { text: 'This is normal text. ' },
            { text: 'This is bold. ', bold: true },
            { text: 'This is italic. ', italic: true },
            { text: 'This is both bold and italic.', bold: true, italic: true }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },

        // Colors and Sizes
        {
          type: 'heading',
          text: 'Colors and Font Sizes',
          level: 2
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Red text ', color: 'FF0000' },
            { text: 'Blue text ', color: '0000FF' },
            { text: 'Green text ', color: '00FF00' },
            { text: 'Large text ', size: 32 },
            { text: 'Small text', size: 16 }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },

        // Alignment
        {
          type: 'heading',
          text: 'Text Alignment',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'This paragraph is left-aligned (default)',
          alignment: 'left'
        },
        {
          type: 'paragraph',
          text: 'This paragraph is center-aligned',
          alignment: 'center'
        },
        {
          type: 'paragraph',
          text: 'This paragraph is right-aligned',
          alignment: 'right'
        },
        {
          type: 'paragraph',
          text: 'This paragraph is justified. Justified text spreads words evenly across the line.',
          alignment: 'justify'
        },
        {
          type: 'spacer',
          height: 200
        },

        // Underline and Strike
        {
          type: 'heading',
          text: 'Underline and Strikethrough',
          level: 2
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Underlined text ', underline: {} },
            { text: 'Strikethrough text', strike: true }
          ]
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_INVOICE = `const documentConfig = {
  title: "Professional Invoice",
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 720,
            right: 720,
            bottom: 720,
            left: 720
          }
        }
      },
      children: [
        // Invoice Header
        {
          type: 'table',
          columnWidths: [4680, 4680],
          borders: 'none',
          rows: [
            {
              cells: [
                {
                  content: [
                    {
                      type: 'heading',
                      text: 'INVOICE',
                      level: 1
                    },
                    {
                      type: 'paragraph',
                      text: [
                        { text: 'Invoice #: ', bold: true },
                        { text: 'INV-2024-001' }
                      ]
                    },
                    {
                      type: 'paragraph',
                      text: [
                        { text: 'Date: ', bold: true },
                        { text: 'January 15, 2024' }
                      ]
                    },
                    {
                      type: 'paragraph',
                      text: [
                        { text: 'Due Date: ', bold: true },
                        { text: 'February 15, 2024' }
                      ]
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                },
                {
                  content: [
                    {
                      type: 'paragraph',
                      text: { text: 'Your Company Name', bold: true, size: 28 },
                      alignment: 'right'
                    },
                    {
                      type: 'paragraph',
                      text: '123 Business Street\\nCity, State 12345\\nPhone: (123) 456-7890\\nEmail: info@company.com',
                      alignment: 'right'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Bill To Section
        {
          type: 'paragraph',
          text: { text: 'Bill To:', bold: true, size: 24 }
        },
        {
          type: 'paragraph',
          text: 'Client Name\\nClient Company\\n456 Client Avenue\\nCity, State 67890'
        },
        {
          type: 'spacer',
          height: 300
        },

        // Items Table
        {
          type: 'table',
          columnWidths: [1500, 4680, 1170, 1170, 1840],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '#', bold: true },
                    alignment: 'center'
                  },
                  width: 1500,
                  verticalAlign: 'center',
                  shading: { fill: '0066FF' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Description', bold: true },
                    alignment: 'center'
                  },
                  width: 4680,
                  verticalAlign: 'center',
                  shading: { fill: '0066FF' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Qty', bold: true },
                    alignment: 'center'
                  },
                  width: 1170,
                  verticalAlign: 'center',
                  shading: { fill: '0066FF' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Rate', bold: true },
                    alignment: 'center'
                  },
                  width: 1170,
                  verticalAlign: 'center',
                  shading: { fill: '0066FF' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Amount', bold: true },
                    alignment: 'center'
                  },
                  width: 1840,
                  verticalAlign: 'center',
                  shading: { fill: '0066FF' }
                }
              ]
            },
            {
              cells: [
                { content: '1', width: 1500 },
                { content: 'Web Development Services - Homepage Design', width: 4680 },
                { content: '1', width: 1170 },
                { content: '$2,500', width: 1170 },
                { content: '$2,500', width: 1840 }
              ]
            },
            {
              cells: [
                { content: '2', width: 1500 },
                { content: 'Backend API Development', width: 4680 },
                { content: '1', width: 1170 },
                { content: '$3,000', width: 1170 },
                { content: '$3,000', width: 1840 }
              ]
            },
            {
              cells: [
                { content: '3', width: 1500 },
                { content: 'Database Design and Setup', width: 4680 },
                { content: '1', width: 1170 },
                { content: '$1,500', width: 1170 },
                { content: '$1,500', width: 1840 }
              ]
            },
            {
              cells: [
                { content: '', width: 1500 },
                { content: '', width: 4680 },
                { content: '', width: 1170 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Subtotal:', bold: true },
                    alignment: 'right'
                  },
                  width: 1170
                },
                {
                  content: {
                    type: 'paragraph',
                    text: '$7,000',
                    alignment: 'right'
                  },
                  width: 1840
                }
              ]
            },
            {
              cells: [
                { content: '', width: 1500 },
                { content: '', width: 4680 },
                { content: '', width: 1170 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Tax (10%):', bold: true },
                    alignment: 'right'
                  },
                  width: 1170
                },
                {
                  content: {
                    type: 'paragraph',
                    text: '$700',
                    alignment: 'right'
                  },
                  width: 1840
                }
              ]
            },
            {
              cells: [
                { content: '', width: 1500 },
                { content: '', width: 4680 },
                { content: '', width: 1170 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'TOTAL:', bold: true, size: 28 },
                    alignment: 'right'
                  },
                  width: 1170,
                  shading: { fill: 'F0F0F0' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '$7,700', bold: true, size: 28 },
                    alignment: 'right'
                  },
                  width: 1840,
                  shading: { fill: 'F0F0F0' }
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 400
        },

        // Payment Info
        {
          type: 'paragraph',
          text: { text: 'Payment Information:', bold: true, size: 24 }
        },
        {
          type: 'paragraph',
          text: 'Bank: Example Bank\\nAccount Name: Your Company Name\\nAccount Number: 1234567890\\nRouting Number: 987654321'
        },
        {
          type: 'spacer',
          height: 200
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Note: ', bold: true },
            { text: 'Payment is due within 30 days. Thank you for your business!' }
          ],
          alignment: 'center'
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_REPORT = `const documentConfig = {
  title: "Quarterly Business Report Q4 2023",
  sections: [
    {
      children: [
        // Cover Page
        {
          type: 'heading',
          text: 'QUARTERLY BUSINESS REPORT',
          level: 1,
          options: {
            alignment: 'center'
          }
        },
        {
          type: 'spacer',
          height: 200
        },
        {
          type: 'heading',
          text: 'Q4 2023',
          level: 2,
          options: {
            alignment: 'center'
          }
        },
        {
          type: 'spacer',
          height: 600
        },

        // Executive Summary
        {
          type: 'heading',
          text: 'Executive Summary',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'This report provides a comprehensive overview of business performance for Q4 2023. Key highlights include a 25% increase in revenue, successful product launches, and expansion into new markets.'
        },
        {
          type: 'spacer',
          height: 300
        },

        // Key Metrics Table
        {
          type: 'heading',
          text: 'Key Performance Metrics',
          level: 2
        },
        {
          type: 'table',
          columnWidths: [3120, 3120, 3120],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Metric', bold: true },
                    alignment: 'center'
                  },
                  width: 3120,
                  verticalAlign: 'center',
                  shading: { fill: '0066FF' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Q4 2023', bold: true },
                    alignment: 'center'
                  },
                  width: 3120,
                  verticalAlign: 'center',
                  shading: { fill: '0066FF' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Change', bold: true },
                    alignment: 'center'
                  },
                  width: 3120,
                  verticalAlign: 'center',
                  shading: { fill: '0066FF' }
                }
              ]
            },
            {
              cells: [
                { content: 'Revenue', width: 3120 },
                { content: '$2.5M', width: 3120 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '+25%', color: '00C48C', bold: true },
                    alignment: 'center'
                  },
                  width: 3120
                }
              ]
            },
            {
              cells: [
                { content: 'New Customers', width: 3120 },
                { content: '450', width: 3120 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '+18%', color: '00C48C', bold: true },
                    alignment: 'center'
                  },
                  width: 3120
                }
              ]
            },
            {
              cells: [
                { content: 'Customer Satisfaction', width: 3120 },
                { content: '94%', width: 3120 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '+3%', color: '00C48C', bold: true },
                    alignment: 'center'
                  },
                  width: 3120
                }
              ]
            },
            {
              cells: [
                { content: 'Operating Expenses', width: 3120 },
                { content: '$1.8M', width: 3120 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '+5%', color: 'FFA940', bold: true },
                    alignment: 'center'
                  },
                  width: 3120
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Achievements Section
        {
          type: 'heading',
          text: 'Major Achievements',
          level: 2
        },
        {
          type: 'paragraph',
          text: [
            { text: '1. Product Launch Success\\n', bold: true },
            { text: 'Successfully launched three new products, exceeding initial sales targets by 40%.\\n\\n' },
            { text: '2. Market Expansion\\n', bold: true },
            { text: 'Entered two new geographic markets with strong initial traction.\\n\\n' },
            { text: '3. Team Growth\\n', bold: true },
            { text: 'Expanded the team by 15 new hires across engineering, sales, and customer success.' }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Challenges and Outlook
        {
          type: 'heading',
          text: 'Challenges & Q1 2024 Outlook',
          level: 2
        },
        {
          type: 'table',
          columnWidths: [4680, 4680],
          borders: 'none',
          rows: [
            {
              cells: [
                {
                  content: [
                    {
                      type: 'paragraph',
                      text: { text: 'Challenges', bold: true, size: 24 }
                    },
                    {
                      type: 'paragraph',
                      text: '• Supply chain delays affecting product delivery\\n• Increased competition in core markets\\n• Higher customer acquisition costs'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                },
                {
                  content: [
                    {
                      type: 'paragraph',
                      text: { text: 'Q1 2024 Focus Areas', bold: true, size: 24 }
                    },
                    {
                      type: 'paragraph',
                      text: '• Optimize supply chain partnerships\\n• Launch customer loyalty program\\n• Invest in marketing automation\\n• Expand product line'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_NEWSLETTER = `const documentConfig = {
  title: "Company Newsletter - January 2024",
  sections: [
    {
      children: [
        // Newsletter Header
        {
          type: 'table',
          columnWidths: [9360],
          rows: [
            {
              cells: [
                {
                  content: [
                    {
                      type: 'heading',
                      text: 'COMPANY NEWSLETTER',
                      level: 1,
                      options: {
                        alignment: 'center'
                      }
                    },
                    {
                      type: 'paragraph',
                      text: 'January 2024 Edition',
                      alignment: 'center'
                    }
                  ],
                  width: 9360,
                  shading: { fill: '0066FF' },
                  verticalAlign: 'center'
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Main Article
        {
          type: 'heading',
          text: 'Featured Story: Company Reaches Major Milestone',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'We are thrilled to announce that our company has reached a significant milestone this month. With the dedication of our team and the support of our customers, we have achieved record-breaking results in customer satisfaction and revenue growth.'
        },
        {
          type: 'spacer',
          height: 200
        },

        // Two-Column Layout
        {
          type: 'table',
          columnWidths: [4680, 4680],
          borders: 'none',
          rows: [
            {
              cells: [
                {
                  content: [
                    {
                      type: 'heading',
                      text: 'Team Spotlight',
                      level: 3
                    },
                    {
                      type: 'paragraph',
                      text: [
                        { text: 'Sarah Johnson - Employee of the Month\\n\\n', bold: true },
                        { text: 'Congratulations to Sarah from our Sales team! Her exceptional performance and dedication have led to closing 15 major deals this month. Sarah\\'s customer-first approach sets a great example for the entire team.' }
                      ]
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                },
                {
                  content: [
                    {
                      type: 'heading',
                      text: 'Upcoming Events',
                      level: 3
                    },
                    {
                      type: 'paragraph',
                      text: [
                        { text: 'Jan 25: ', bold: true },
                        { text: 'Annual Team Building Day\\n' },
                        { text: 'Feb 1: ', bold: true },
                        { text: 'Q4 Results Presentation\\n' },
                        { text: 'Feb 14: ', bold: true },
                        { text: 'Valentine\\'s Day Office Party' }
                      ]
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Quick Stats
        {
          type: 'heading',
          text: 'By The Numbers',
          level: 2
        },
        {
          type: 'table',
          columnWidths: [2340, 2340, 2340, 2340],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: [
                      { text: '250+\\n', bold: true, size: 32, color: '0066FF' },
                      { text: 'New Customers' }
                    ],
                    alignment: 'center'
                  },
                  width: 2340,
                  verticalAlign: 'center'
                },
                {
                  content: {
                    type: 'paragraph',
                    text: [
                      { text: '98%\\n', bold: true, size: 32, color: '00C48C' },
                      { text: 'Satisfaction Rate' }
                    ],
                    alignment: 'center'
                  },
                  width: 2340,
                  verticalAlign: 'center'
                },
                {
                  content: {
                    type: 'paragraph',
                    text: [
                      { text: '45\\n', bold: true, size: 32, color: 'FFA940' },
                      { text: 'Team Members' }
                    ],
                    alignment: 'center'
                  },
                  width: 2340,
                  verticalAlign: 'center'
                },
                {
                  content: {
                    type: 'paragraph',
                    text: [
                      { text: '12\\n', bold: true, size: 32, color: '1890FF' },
                      { text: 'New Products' }
                    ],
                    alignment: 'center'
                  },
                  width: 2340,
                  verticalAlign: 'center'
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Company News
        {
          type: 'heading',
          text: 'Company News & Updates',
          level: 2
        },
        {
          type: 'paragraph',
          text: [
            { text: '• ', bold: true },
            { text: 'New Office Opening: Our new branch in San Francisco is now operational!\\n' },
            { text: '• ', bold: true },
            { text: 'Product Update: Version 2.0 of our flagship product launches next month\\n' },
            { text: '• ', bold: true },
            { text: 'Sustainability: We\\'ve achieved carbon-neutral status for our operations\\n' },
            { text: '• ', bold: true },
            { text: 'Community: Raised $50K for local charities through our fundraising campaign' }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },

        // Footer
        {
          type: 'paragraph',
          text: 'Thank you for being part of our journey! Questions or suggestions? Contact us at newsletter@company.com',
          alignment: 'center'
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_TECHNICAL_DOC = `const documentConfig = {
  title: "API Technical Documentation",
  sections: [
    {
      children: [
        // Title
        {
          type: 'heading',
          text: 'REST API Documentation',
          level: 1,
          options: {
            alignment: 'center'
          }
        },
        {
          type: 'paragraph',
          text: 'Version 2.0 | Last Updated: January 2024',
          alignment: 'center'
        },
        {
          type: 'spacer',
          height: 400
        },

        // Overview
        {
          type: 'heading',
          text: '1. Overview',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'This document describes the REST API endpoints for the Sample Application. The API follows RESTful conventions and returns JSON responses.'
        },
        {
          type: 'spacer',
          height: 200
        },

        // Base URL
        {
          type: 'paragraph',
          text: [
            { text: 'Base URL: ', bold: true },
            { text: 'https://api.example.com/v2', color: '0066FF' }
          ]
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Authentication: ', bold: true },
            { text: 'Bearer Token (JWT)' }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Endpoints
        {
          type: 'heading',
          text: '2. Endpoints',
          level: 2
        },

        // GET Users
        {
          type: 'heading',
          text: '2.1 Get All Users',
          level: 3
        },
        {
          type: 'table',
          columnWidths: [2340, 7020],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Method', bold: true }
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' }
                },
                {
                  content: 'GET',
                  width: 7020
                }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Endpoint', bold: true }
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '/api/users', color: '0066FF' }
                  },
                  width: 7020
                }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Description', bold: true }
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' }
                },
                {
                  content: 'Retrieves a paginated list of all users',
                  width: 7020
                }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Parameters', bold: true }
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' }
                },
                {
                  content: 'page (optional): Page number\\nlimit (optional): Items per page (default: 20)',
                  width: 7020
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },

        // POST User
        {
          type: 'heading',
          text: '2.2 Create User',
          level: 3
        },
        {
          type: 'table',
          columnWidths: [2340, 7020],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Method', bold: true }
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' }
                },
                {
                  content: 'POST',
                  width: 7020
                }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Endpoint', bold: true }
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '/api/users', color: '0066FF' }
                  },
                  width: 7020
                }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Body', bold: true }
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' }
                },
                {
                  content: {
                    type: 'paragraph',
                    text: '{"name": "John Doe", "email": "john@example.com", "role": "user"}'
                  },
                  width: 7020
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Response Codes
        {
          type: 'heading',
          text: '3. Response Status Codes',
          level: 2
        },
        {
          type: 'table',
          columnWidths: [1872, 7488],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Code', bold: true },
                    alignment: 'center'
                  },
                  width: 1872,
                  shading: { fill: '0066FF' },
                  verticalAlign: 'center'
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Description', bold: true },
                    alignment: 'center'
                  },
                  width: 7488,
                  shading: { fill: '0066FF' },
                  verticalAlign: 'center'
                }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '200', color: '00C48C', bold: true },
                    alignment: 'center'
                  },
                  width: 1872
                },
                { content: 'Success - Request completed successfully', width: 7488 }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '201', color: '00C48C', bold: true },
                    alignment: 'center'
                  },
                  width: 1872
                },
                { content: 'Created - Resource created successfully', width: 7488 }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '400', color: 'FFA940', bold: true },
                    alignment: 'center'
                  },
                  width: 1872
                },
                { content: 'Bad Request - Invalid request parameters', width: 7488 }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '401', color: 'FF4D4F', bold: true },
                    alignment: 'center'
                  },
                  width: 1872
                },
                { content: 'Unauthorized - Authentication required', width: 7488 }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '404', color: 'FF4D4F', bold: true },
                    alignment: 'center'
                  },
                  width: 1872
                },
                { content: 'Not Found - Resource not found', width: 7488 }
              ]
            },
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: '500', color: 'FF4D4F', bold: true },
                    alignment: 'center'
                  },
                  width: 1872
                },
                { content: 'Server Error - Internal server error', width: 7488 }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Rate Limiting
        {
          type: 'heading',
          text: '4. Rate Limiting',
          level: 2
        },
        {
          type: 'paragraph',
          text: 'API requests are limited to 100 requests per minute per IP address. Exceeding this limit will result in a 429 Too Many Requests response.'
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

export const SAMPLE_MEETING_MINUTES = `const documentConfig = {
  title: "Team Meeting Minutes - January 18, 2024",
  sections: [
    {
      children: [
        // Header
        {
          type: 'heading',
          text: 'Team Meeting Minutes',
          level: 1,
          options: {
            alignment: 'center'
          }
        },
        {
          type: 'paragraph',
          text: 'January 18, 2024 | 2:00 PM - 3:30 PM | Conference Room A',
          alignment: 'center'
        },
        {
          type: 'spacer',
          height: 300
        },

        // Attendees
        {
          type: 'heading',
          text: 'Attendees',
          level: 2
        },
        {
          type: 'table',
          columnWidths: [4680, 4680],
          borders: 'none',
          rows: [
            {
              cells: [
                {
                  content: [
                    {
                      type: 'paragraph',
                      text: { text: 'Present:', bold: true }
                    },
                    {
                      type: 'paragraph',
                      text: '• John Smith (Project Manager)\\n• Sarah Johnson (Lead Developer)\\n• Mike Chen (UX Designer)\\n• Emily Davis (QA Lead)\\n• Tom Wilson (DevOps)'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                },
                {
                  content: [
                    {
                      type: 'paragraph',
                      text: { text: 'Absent:', bold: true }
                    },
                    {
                      type: 'paragraph',
                      text: '• Lisa Anderson (Product Owner) - Sick leave\\n• David Lee (Backend Dev) - Client meeting'
                    }
                  ],
                  width: 4680,
                  verticalAlign: 'top'
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Agenda
        {
          type: 'heading',
          text: 'Agenda',
          level: 2
        },
        {
          type: 'paragraph',
          text: '1. Sprint Review\\n2. Project Timeline Update\\n3. Technical Challenges Discussion\\n4. Action Items from Previous Meeting\\n5. Any Other Business'
        },
        {
          type: 'spacer',
          height: 300
        },

        // Discussion Points
        {
          type: 'heading',
          text: 'Discussion Points',
          level: 2
        },

        {
          type: 'heading',
          text: '1. Sprint Review',
          level: 3
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Presented by: ', bold: true },
            { text: 'Sarah Johnson\\n\\n' },
            { text: 'Summary: ', bold: true },
            { text: 'The team completed 85% of planned sprint tasks. Three user stories were carried over to the next sprint due to unexpected technical complexity in the authentication module.' }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },

        {
          type: 'heading',
          text: '2. Project Timeline Update',
          level: 3
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Presented by: ', bold: true },
            { text: 'John Smith\\n\\n' },
            { text: 'Key Points:\\n', bold: true },
            { text: '• Phase 1 deadline remains February 15, 2024\\n• Added 2 additional resources to meet deadline\\n• Weekly checkpoint meetings scheduled for Mondays at 10 AM' }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },

        {
          type: 'heading',
          text: '3. Technical Challenges',
          level: 3
        },
        {
          type: 'table',
          columnWidths: [3120, 3120, 3120],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Challenge', bold: true },
                    alignment: 'center'
                  },
                  width: 3120,
                  shading: { fill: '0066FF' },
                  verticalAlign: 'center'
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Owner', bold: true },
                    alignment: 'center'
                  },
                  width: 3120,
                  shading: { fill: '0066FF' },
                  verticalAlign: 'center'
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Status', bold: true },
                    alignment: 'center'
                  },
                  width: 3120,
                  shading: { fill: '0066FF' },
                  verticalAlign: 'center'
                }
              ]
            },
            {
              cells: [
                { content: 'API Integration Timeout', width: 3120 },
                { content: 'Tom Wilson', width: 3120 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'In Progress', color: 'FFA940', bold: true },
                    alignment: 'center'
                  },
                  width: 3120
                }
              ]
            },
            {
              cells: [
                { content: 'Mobile Responsiveness', width: 3120 },
                { content: 'Mike Chen', width: 3120 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Resolved', color: '00C48C', bold: true },
                    alignment: 'center'
                  },
                  width: 3120
                }
              ]
            },
            {
              cells: [
                { content: 'Database Performance', width: 3120 },
                { content: 'Sarah Johnson', width: 3120 },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Not Started', color: 'FF4D4F', bold: true },
                    alignment: 'center'
                  },
                  width: 3120
                }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Action Items
        {
          type: 'heading',
          text: 'Action Items',
          level: 2
        },
        {
          type: 'table',
          columnWidths: [4680, 2340, 2340],
          rows: [
            {
              cells: [
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Action', bold: true },
                    alignment: 'center'
                  },
                  width: 4680,
                  shading: { fill: 'F0F0F0' },
                  verticalAlign: 'center'
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Owner', bold: true },
                    alignment: 'center'
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' },
                  verticalAlign: 'center'
                },
                {
                  content: {
                    type: 'paragraph',
                    text: { text: 'Due Date', bold: true },
                    alignment: 'center'
                  },
                  width: 2340,
                  shading: { fill: 'F0F0F0' },
                  verticalAlign: 'center'
                }
              ]
            },
            {
              cells: [
                { content: 'Complete authentication module testing', width: 4680 },
                { content: 'Emily Davis', width: 2340 },
                { content: 'Jan 22', width: 2340 }
              ]
            },
            {
              cells: [
                { content: 'Resolve API timeout issues', width: 4680 },
                { content: 'Tom Wilson', width: 2340 },
                { content: 'Jan 25', width: 2340 }
              ]
            },
            {
              cells: [
                { content: 'Optimize database queries', width: 4680 },
                { content: 'Sarah Johnson', width: 2340 },
                { content: 'Jan 30', width: 2340 }
              ]
            },
            {
              cells: [
                { content: 'Update project documentation', width: 4680 },
                { content: 'John Smith', width: 2340 },
                { content: 'Jan 26', width: 2340 }
              ]
            }
          ]
        },
        {
          type: 'spacer',
          height: 300
        },

        // Next Meeting
        {
          type: 'heading',
          text: 'Next Meeting',
          level: 2
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Date: ', bold: true },
            { text: 'January 25, 2024\\n' },
            { text: 'Time: ', bold: true },
            { text: '2:00 PM - 3:00 PM\\n' },
            { text: 'Location: ', bold: true },
            { text: 'Conference Room B' }
          ]
        },
        {
          type: 'spacer',
          height: 200
        },
        {
          type: 'paragraph',
          text: [
            { text: 'Minutes recorded by: ', bold: true },
            { text: 'John Smith' }
          ]
        }
      ]
    }
  ]
};

module.exports = documentConfig;`;

// Sample metadata for displaying in the UI
export const SAMPLES = [
  {
    id: 'basic',
    name: 'Basic Document',
    description: 'Simple document with headings and paragraphs',
    code: SAMPLE_BASIC,
  },
  {
    id: 'resume',
    name: 'Professional Resume',
    description: 'Resume template with two-column layout',
    code: SAMPLE_RESUME,
  },
  {
    id: 'table',
    name: 'Table Example',
    description: 'Product comparison table with styling',
    code: SAMPLE_TABLE,
  },
  {
    id: 'srs',
    name: 'SRS Document',
    description: 'Software Requirements Specification template',
    code: SAMPLE_SRS,
  },
  {
    id: 'formatted',
    name: 'Text Formatting',
    description: 'Examples of text colors, sizes, and styles',
    code: SAMPLE_FORMATTED_TEXT,
  },
  {
    id: 'invoice',
    name: 'Invoice',
    description: 'Professional invoice with items and totals',
    code: SAMPLE_INVOICE,
  },
  {
    id: 'report',
    name: 'Business Report',
    description: 'Quarterly report with metrics and tables',
    code: SAMPLE_REPORT,
  },
  {
    id: 'newsletter',
    name: 'Newsletter',
    description: 'Company newsletter with stats and events',
    code: SAMPLE_NEWSLETTER,
  },
  {
    id: 'technical',
    name: 'API Documentation',
    description: 'Technical API documentation template',
    code: SAMPLE_TECHNICAL_DOC,
  },
  {
    id: 'meeting',
    name: 'Meeting Minutes',
    description: 'Team meeting notes with action items',
    code: SAMPLE_MEETING_MINUTES,
  },
];
