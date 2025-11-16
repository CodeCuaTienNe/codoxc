# Codoxc - JavaScript to Word Converter

A modern Next.js application that converts JavaScript code to beautifully formatted Word documents using the `docx` library.

## Features

- Upload `.js` or `.txt` files or paste code directly
- Support for multiple document elements:
  - Paragraphs with rich text formatting
  - Headings (H1-H6)
  - Tables with custom styling
  - 2-column layouts (perfect for resumes/CVs)
  - Text alignment, spacing, and indentation
- Real-time preview
- Download as `.docx` files
- Modern UI with Ant Design (pastel colors, minimal design)

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

1. **Write Code**: Paste your JavaScript code or upload a file
2. **Generate**: Click "Generate Word Document"
3. **Download**: Click "Download .docx" to save

### Code Format

Your code must export a `documentConfig` object:

```javascript
const documentConfig = {
  sections: [
    {
      children: [
        {
          type: 'heading',
          text: 'My Document',
          level: 1
        },
        {
          type: 'paragraph',
          text: 'This is a paragraph'
        }
      ]
    }
  ]
};
```

## Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages automatically.

1. Push to `main` branch
2. GitHub Actions will build and deploy to `gh-pages` branch
3. Enable GitHub Pages in repository settings (Source: `gh-pages` branch)

The app will be available at: `https://YOUR_USERNAME.github.io/codoxc/`

## License

MIT
