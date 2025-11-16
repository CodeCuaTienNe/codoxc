// Help text and documentation content

export const TOOLTIP_CODE_INPUT = 'Enter or upload your JavaScript code containing a documentConfig object';
export const TOOLTIP_UPLOAD = 'Upload a .js or .txt file containing documentConfig';
export const TOOLTIP_CLEAR = 'Clear all code from the editor';
export const TOOLTIP_GENERATE = 'Parse the code and generate a Word document';
export const TOOLTIP_DOWNLOAD = 'Download the generated .docx file';
export const TOOLTIP_TITLE = 'The title of your document';
export const TOOLTIP_SECTIONS = 'Number of sections in your document';
export const TOOLTIP_STYLES = 'Whether custom styles are defined';
export const TOOLTIP_ELEMENTS = 'Total number of elements (paragraphs, headings, tables, etc.)';
export const TOOLTIP_FILE_SIZE = 'Size of the generated Word document';

// Prompt format guide for AI coding assistants
export const PROMPT_FORMAT_GUIDE = `## Document Configuration Structure

The documentConfig object should follow this structure:

\`\`\`javascript
const documentConfig = {
  title: "Document Title",        // Optional: Document title
  sections: [                     // Required: Array of sections
    {
      properties: {               // Optional: Section properties
        page: {
          margin: {
            top: 720,            // In twentieths of a point (1440 = 1 inch)
            right: 720,
            bottom: 720,
            left: 720
          }
        }
      },
      children: [                // Required: Array of elements
        // Element objects here
      ]
    }
  ],
  styles: {}                     // Optional: Custom styles
};

module.exports = documentConfig; // Export for Node.js compatibility
\`\`\`

## Supported Element Types

### 1. Heading
\`\`\`javascript
{
  type: 'heading',
  text: 'Heading Text',
  level: 1,                      // 1-6 (h1, h2, h3, h4, h5, h6)
  options: {
    alignment: 'center'          // Optional: 'left', 'center', 'right', 'justify'
  }
}
\`\`\`

### 2. Paragraph
\`\`\`javascript
{
  type: 'paragraph',
  text: 'Simple paragraph text',
  alignment: 'left'              // Optional: 'left', 'center', 'right', 'justify'
}
\`\`\`

### 3. Formatted Text
\`\`\`javascript
{
  type: 'paragraph',
  text: [                        // Array for mixed formatting
    { text: 'Normal text ' },
    { text: 'Bold text ', bold: true },
    { text: 'Italic text ', italic: true },
    { text: 'Colored text', color: 'FF0000' },  // Hex color without #
    { text: 'Large text', size: 32 },           // Font size in half-points
    { text: 'Underlined', underline: {} },
    { text: 'Strikethrough', strike: true }
  ]
}
\`\`\`

### 4. Table
\`\`\`javascript
{
  type: 'table',
  columnWidths: [3000, 6360],    // Width in twentieths of a point
  borders: 'none',               // Optional: 'none' for borderless
  rows: [
    {
      cells: [
        {
          content: 'Cell text',  // Simple string content
          width: 3000,
          verticalAlign: 'center', // Optional: 'top', 'center', 'bottom'
          shading: { fill: 'E0E0E0' } // Optional: hex color for background
        },
        {
          content: {             // Complex content with formatting
            type: 'paragraph',
            text: { text: 'Formatted', bold: true },
            alignment: 'center'
          },
          width: 6360
        },
        {
          content: [             // Multiple elements
            { type: 'heading', text: 'Title', level: 3 },
            { type: 'paragraph', text: 'Description' }
          ],
          width: 3000
        }
      ]
    }
  ]
}
\`\`\`

### 5. Spacer
\`\`\`javascript
{
  type: 'spacer',
  height: 200                    // Height in twentieths of a point
}
\`\`\`

## Common Patterns

### Two-Column Layout
\`\`\`javascript
{
  type: 'table',
  columnWidths: [4680, 4680],    // Equal width columns
  borders: 'none',
  rows: [
    {
      cells: [
        {
          content: [
            { type: 'heading', text: 'Left Column', level: 3 },
            { type: 'paragraph', text: 'Content...' }
          ],
          width: 4680,
          verticalAlign: 'top'
        },
        {
          content: [
            { type: 'heading', text: 'Right Column', level: 3 },
            { type: 'paragraph', text: 'Content...' }
          ],
          width: 4680,
          verticalAlign: 'top'
        }
      ]
    }
  ]
}
\`\`\`

### Styled Table Header
\`\`\`javascript
{
  type: 'table',
  columnWidths: [3000, 6360],
  rows: [
    {
      cells: [
        {
          content: {
            type: 'paragraph',
            text: { text: 'Header', bold: true },
            alignment: 'center'
          },
          verticalAlign: 'center',
          shading: { fill: '4472C4' }  // Blue background
        }
      ]
    }
  ]
}
\`\`\`

## Tips for AI Assistants

When generating documentConfig for users:

1. **Always include** \`module.exports = documentConfig;\` at the end
2. **Use proper measurements**: 1 inch = 1440 twentieths of a point
3. **Colors are hex without #**: Use 'FF0000' not '#FF0000'
4. **Font sizes are in half-points**: size: 28 = 14pt
5. **Escape newlines**: Use '\\\\n' in strings for line breaks
6. **Total page width**: Approximately 9360 twentieths of a point (6.5 inches)
7. **Common margins**: 720 (0.5 inch) or 1440 (1 inch)

## Example Prompts for Users

**For a simple letter:**
"Create a documentConfig for a formal business letter with centered heading, recipient address, body paragraphs, and signature"

**For a resume:**
"Generate a documentConfig for a professional resume with two-column layout for skills and experience sections"

**For a report:**
"Create a documentConfig for a technical report with table of contents, multiple sections with headings, and data tables"

**For an SRS:**
"Generate a Software Requirements Specification document with title page, introduction, features table, and requirements sections"
`;

export const GETTING_STARTED_GUIDE = `# Getting Started with Codoxc

## Quick Start

1. **Write or upload your code**: Enter JavaScript code containing a \`documentConfig\` object
2. **Click Generate**: Parse the code and create the document
3. **Preview metadata**: Review document details
4. **Download**: Get your .docx file

## Document Structure

Every document needs:
- A \`documentConfig\` object
- At least one \`section\` with \`children\`
- Elements like headings, paragraphs, or tables

## Basic Example

\`\`\`javascript
const documentConfig = {
  title: "My First Document",
  sections: [
    {
      children: [
        {
          type: 'heading',
          text: 'Hello World',
          level: 1
        },
        {
          type: 'paragraph',
          text: 'This is my first document!'
        }
      ]
    }
  ]
};

module.exports = documentConfig;
\`\`\`

## Need Help?

- Browse **Sample Templates** for inspiration
- Check the **Format Guide** for detailed syntax
- Use AI assistants with the prompt format guide
`;

export const FORMAT_REFERENCE = `# Format Reference

## Measurements

All measurements are in **twentieths of a point**:
- 1 point = 20 units
- 1 inch = 1440 units (72 points × 20)
- Page width ≈ 9360 units (6.5 inches)

## Common Values

**Margins:**
- Small: 360 (0.25 inch)
- Medium: 720 (0.5 inch)
- Large: 1440 (1 inch)

**Spacing:**
- Small gap: 100-200
- Medium gap: 200-400
- Large gap: 400-600

**Font Sizes (in half-points):**
- Small: 16-20 (8-10pt)
- Normal: 22-24 (11-12pt)
- Large: 28-32 (14-16pt)
- Heading: 36-48 (18-24pt)

**Colors (hex without #):**
- Red: 'FF0000'
- Blue: '0000FF'
- Green: '00FF00'
- Gray: '808080'
- Black: '000000'

## Table Column Widths

For a standard page with 1-inch margins (usable width: 9360 units):
- Full width: 9360
- Half (2 columns): 4680 each
- Third (3 columns): 3120 each
- Quarter (4 columns): 2340 each
`;
