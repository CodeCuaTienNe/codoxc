# Project Summary - Codoxc

## Overview

**Codoxc** is a modern Next.js application that converts JavaScript code to formatted Word documents (.docx).

## Tech Stack

- **Framework:** Next.js 15.1.3 (App Router)
- **UI Library:** Ant Design 5.28.1
- **Styling:** Tailwind CSS 4 + Ant Design theming
- **Language:** TypeScript
- **Document Generation:** docx 8.6.0
- **Runtime:** Bun
- **Deployment:** GitHub Pages (static export)

## Project Structure

```
codoxc/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with Ant Design config
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── CodeInput.tsx      # Code input component
│   │   ├── Actions.tsx        # Generate & download buttons
│   │   └── Preview.tsx        # Document preview
│   └── lib/
│       ├── parser.ts          # Parse JS code to config
│       └── generator.ts       # Generate Word document from config
├── next.config.mjs            # Next.js config (GitHub Pages setup)
├── tailwind.config.ts         # Tailwind config (pastel colors)
├── tsconfig.json             # TypeScript config
├── package.json               # Dependencies
└── README.md                  # Documentation
```

## Key Features

### UI/UX Design

- **Minimal Design**: No shadows, minimal border radius (4px)
- **Pastel Colors**:
  - Primary: #B8D8E8 (pastel blue)
  - Success: #C1E1C1 (pastel green)
  - Warning: #FDFD96 (pastel yellow)
  - Error: #FFD1DC (pastel pink)
  - Info: #D8BAFD (pastel purple)
- **No Animations**: No scale effects, no shadows on hover
- **Clean Layout**: Header, content area, footer

### Functionality

1. **Code Input**
   - Text area for pasting code
   - File upload (.js, .txt)
   - Character counter
   - Clear button

2. **Document Generation**
   - Parse JavaScript code
   - Validate `documentConfig` object
   - Convert to docx format
   - Use `Packer.toBlob()` for browser compatibility

3. **Preview**
   - Show document metadata
   - Display sections count
   - Show file size

4. **Download**
   - One-click download as .docx
   - Automatic filename

### Supported Elements

- **Paragraphs**: Rich text formatting (bold, italic, colors, sizes)
- **Headings**: H1-H6
- **Tables**: Custom widths, borders, shading, merged cells
- **Spacers**: Custom heights
- **Layouts**: 2-column layouts for resumes/CVs

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev
# → http://localhost:3000

# Build for production
bun run build

# Start production server (after build)
bun start
```

## Deployment

### GitHub Pages (Automated)

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Live at: `https://YOUR_USERNAME.github.io/codoxc/`

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## Configuration

### Next.js Config

- **Output**: Static export (`output: "export"`)
- **Images**: Unoptimized (`images: { unoptimized: true }`)
- **Base Path**: `/codoxc` (for GitHub Pages)
- **Trailing Slash**: Enabled

### Ant Design Theme

- Custom pastel color palette
- Disabled shadows and scale effects
- Minimal border radius (4px)

### Tailwind CSS

- Extended with pastel colors
- Minimal scrollbar styling
- Responsive design utilities

## Browser Compatibility

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **docx library**: Uses `Packer.toBlob()` for browser support
- **No Node.js APIs**: Pure client-side generation

## Known Limitations

1. **Client-side only**: Document generation happens in browser
2. **Memory**: Large documents may be slow on low-end devices
3. **Static export**: No server-side features
4. **Image optimization**: Disabled for GitHub Pages compatibility

## Future Enhancements

- [ ] Syntax highlighting for code editor
- [ ] More document templates
- [ ] Export to PDF
- [ ] Real-time preview rendering
- [ ] Drag & drop file upload
- [ ] Save/load configurations
- [ ] Dark mode

## Credits

- [Next.js](https://nextjs.org/)
- [Ant Design](https://ant.design/)
- [docx](https://github.com/dolanmiu/docx) by dolanmiu
- [Tailwind CSS](https://tailwindcss.com/)

## License

MIT
