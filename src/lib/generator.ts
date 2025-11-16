import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  WidthType,
  VerticalAlign,
} from "docx";

export async function generateDocument(config: any): Promise<Blob> {
  const sections = [];

  // Process each section
  for (const section of config.sections || []) {
    const sectionConfig: any = {
      properties: section.properties || {},
      children: [],
    };

    // Process children elements
    for (const element of section.children || []) {
      const docxElement = convertElement(element);
      if (docxElement) {
        if (Array.isArray(docxElement)) {
          sectionConfig.children.push(...docxElement);
        } else {
          sectionConfig.children.push(docxElement);
        }
      }
    }

    sections.push(sectionConfig);
  }

  // Create document
  const docConfig: any = {
    sections: sections,
  };

  // Add styles if provided
  if (config.styles) {
    docConfig.styles = config.styles;
  }

  const doc = new Document(docConfig);

  // Generate blob
  const blob = await Packer.toBlob(doc);
  return blob;
}

function convertElement(element: any): any {
  switch (element.type) {
    case "paragraph":
      return createParagraph(element);
    case "table":
      return createTable(element);
    case "heading":
      return createHeading(element);
    case "spacer":
      return createSpacer(element);
    default:
      console.warn("Unknown element type:", element.type);
      return null;
  }
}

function createParagraph(config: any) {
  const paragraphConfig: any = {
    children: [],
  };

  // Add text runs
  if (config.text) {
    if (typeof config.text === "string") {
      paragraphConfig.children.push(
        new TextRun({
          text: config.text,
          ...(config.textOptions || {}),
        })
      );
    } else if (Array.isArray(config.text)) {
      config.text.forEach((textItem: any) => {
        if (typeof textItem === "string") {
          paragraphConfig.children.push(new TextRun(textItem));
        } else {
          paragraphConfig.children.push(new TextRun(textItem));
        }
      });
    } else {
      paragraphConfig.children.push(new TextRun(config.text));
    }
  }

  // Add alignment
  if (config.alignment) {
    const alignmentMap: any = {
      left: AlignmentType.LEFT,
      center: AlignmentType.CENTER,
      right: AlignmentType.RIGHT,
      justify: AlignmentType.JUSTIFIED,
    };
    paragraphConfig.alignment =
      alignmentMap[config.alignment] || AlignmentType.LEFT;
  }

  // Add spacing
  if (config.spacing) {
    paragraphConfig.spacing = config.spacing;
  }

  // Add indent
  if (config.indent) {
    paragraphConfig.indent = config.indent;
  }

  // Add bullet/numbering
  if (config.bullet) {
    paragraphConfig.bullet = config.bullet;
  }

  // Add border
  if (config.border) {
    paragraphConfig.border = config.border;
  }

  return new Paragraph(paragraphConfig);
}

function createHeading(config: any) {
  const headingLevelMap: any = {
    1: HeadingLevel.HEADING_1,
    2: HeadingLevel.HEADING_2,
    3: HeadingLevel.HEADING_3,
    4: HeadingLevel.HEADING_4,
    5: HeadingLevel.HEADING_5,
    6: HeadingLevel.HEADING_6,
  };

  return new Paragraph({
    text: config.text || "",
    heading: headingLevelMap[config.level || 1],
    ...(config.options || {}),
  });
}

function createTable(config: any) {
  const rows = [];

  // Process rows
  for (const rowData of config.rows || []) {
    const cells = [];

    // Process cells
    for (const cellData of rowData.cells || []) {
      const cellChildren = [];

      // Process cell content
      if (cellData.content) {
        if (typeof cellData.content === "string") {
          cellChildren.push(
            new Paragraph({
              children: [new TextRun(cellData.content)],
            })
          );
        } else if (Array.isArray(cellData.content)) {
          cellData.content.forEach((item: any) => {
            cellChildren.push(convertElement(item));
          });
        } else if (cellData.content.type) {
          cellChildren.push(convertElement(cellData.content));
        }
      }

      // Create cell
      const cellConfig: any = {
        children:
          cellChildren.length > 0
            ? cellChildren
            : [new Paragraph({ text: "" })],
        verticalAlign: cellData.verticalAlign
          ? (VerticalAlign as any)[cellData.verticalAlign.toUpperCase()]
          : VerticalAlign.TOP,
      };

      // Add width
      if (cellData.width) {
        cellConfig.width = {
          size: cellData.width,
          type: WidthType.DXA,
        };
      }

      // Add colspan
      if (cellData.columnSpan) {
        cellConfig.columnSpan = cellData.columnSpan;
      }

      // Add rowspan
      if (cellData.rowSpan) {
        cellConfig.rowSpan = cellData.rowSpan;
      }

      // Add borders
      if (cellData.borders) {
        cellConfig.borders = cellData.borders;
      }

      // Add shading (background color)
      if (cellData.shading) {
        cellConfig.shading = cellData.shading;
      }

      cells.push(new TableCell(cellConfig));
    }

    rows.push(new TableRow({ children: cells }));
  }

  // Create table
  const tableConfig: any = {
    rows: rows,
  };

  // Add column widths
  if (config.columnWidths) {
    tableConfig.columnWidths = config.columnWidths;
  }

  // Add width
  if (config.width) {
    tableConfig.width = config.width;
  }

  // Add borders
  if (config.borders) {
    const borderStyle = config.borders;
    const noBorder = {
      style: BorderStyle.NONE,
      size: 0,
      color: "FFFFFF",
    };

    if (borderStyle === "none") {
      tableConfig.borders = {
        top: noBorder,
        bottom: noBorder,
        left: noBorder,
        right: noBorder,
        insideHorizontal: noBorder,
        insideVertical: noBorder,
      };
    } else if (typeof borderStyle === "object") {
      tableConfig.borders = borderStyle;
    }
  }

  return new Table(tableConfig);
}

function createSpacer(config: any) {
  const height = config.height || 200;

  return new Paragraph({
    text: "",
    spacing: {
      after: height,
    },
  });
}
