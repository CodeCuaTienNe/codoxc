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
];
