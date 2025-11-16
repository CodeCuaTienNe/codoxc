# Codoxc - JavaScript to Word Converter

A modern Next.js application that converts JavaScript code to beautifully formatted Word documents using the `docx` library

## Features

- Upload `.js` or `.txt` files or paste code directly
- Interactive tooltips and help system
- 5 pre-built sample templates (Basic, Resume, Table, SRS, Formatted Text)
- Comprehensive documentation with format guide
- Support for multiple document elements:
  - Paragraphs with rich text formatting (bold, italic, colors, sizes)
  - Headings (H1-H6)
  - Tables with custom styling and shading
  - 2-column layouts (perfect for resumes/CVs)
  - Text alignment, spacing, and indentation
  - Spacers for vertical spacing
- Real-time preview with detailed metadata
- Download as `.docx` files
- Modern UI with Ant Design (pastel colors, minimal design, no shadows)
- Fully responsive layout
- AI-friendly prompt format guide

## Tech Stack

- **Next.js 15** - React framework
- **Ant Design 5** - UI component library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **docx** - Word document generation

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
bun run build
```

## Usage

### Quick Start

1. **Browse Samples**: Click on any sample template to load it into the editor
2. **Or Write Code**: Paste your JavaScript code or upload a file
3. **Get Help**: Click "Help & Guide" button for comprehensive documentation
4. **Generate**: Click "Generate Word Document"
5. **Preview**: Review the document metadata
6. **Download**: Click "Download .docx" to save

### Sample Templates

The application includes 5 ready-to-use templates:

1. **Basic Document** - Simple document with headings and paragraphs
2. **Professional Resume** - Two-column resume layout
3. **Table Example** - Product comparison table with styling
4. **SRS Document** - Software Requirements Specification template
5. **Text Formatting** - Examples of various text styles and colors

### Code Format

Your code must export a `documentConfig` object:

```javascript
const documentConfig = {
  title: "Document Title",        // Optional
  sections: [                     // Required
    {
      properties: {               // Optional section properties
        page: {
          margin: {
            top: 720,            // Margins in twentieths of a point
            right: 720,
            bottom: 720,
            left: 720
          }
        }
      },
      children: [                // Required: array of elements
        {
          type: 'heading',
          text: 'My Document',
          level: 1,
          options: {
            alignment: 'center'  // Optional: left, center, right, justify
          }
        },
        {
          type: 'paragraph',
          text: 'This is a paragraph'
        }
      ]
    }
  ],
  styles: {}                     // Optional custom styles
};

module.exports = documentConfig; // Required for export
```

### Tooltips and Help

- Hover over question mark icons for quick help
- Click "Help & Guide" for detailed documentation including:
  - Getting Started guide
  - Complete format reference
  - Prompt guide for AI coding assistants
  - Examples and common patterns

## Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages automatically.

1. Push to `master` branch
2. GitHub Actions will build and deploy to `public` branch
3. Configure GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Under "Build and deployment":
     - Source: `Deploy from a branch`
     - Branch: Select `public` branch
     - Folder: `/ (root)`
   - Click Save

The app will be available at: `https://codecuatienne.github.io/codoxc/`

## License

MIT
