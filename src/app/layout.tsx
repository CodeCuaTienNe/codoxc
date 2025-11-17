import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codoxc - JS to Word Converter",
  description: "Convert JavaScript code to formatted Word documents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                // Professional digital color palette
                colorPrimary: "#0066FF",      // Vibrant blue
                colorSuccess: "#00C48C",      // Modern green
                colorWarning: "#FFA940",      // Orange
                colorError: "#FF4D4F",        // Red
                colorInfo: "#1890FF",         // Info blue
                colorText: "#1a1a1a",         // Near black
                colorTextSecondary: "#666666", // Medium gray
                colorBorder: "#d9d9d9",       // Border gray
                colorBgContainer: "#ffffff",  // White background

                // Typography
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: 14,
                fontSizeHeading1: 28,
                fontSizeHeading2: 22,
                fontSizeHeading3: 18,

                // Minimal design - sharp edges, no shadows
                borderRadius: 2,
                borderRadiusLG: 4,
                borderRadiusSM: 1,
                boxShadow: "none",
                boxShadowSecondary: "none",
              },
              components: {
                Button: {
                  boxShadow: "none",
                  primaryShadow: "none",
                  controlHeight: 36,
                  controlHeightLG: 44,
                  fontWeight: 500,
                },
                Card: {
                  boxShadowTertiary: "none",
                  headerBg: "#fafafa",
                  headerFontSize: 16,
                  headerFontSizeSM: 14,
                },
                Input: {
                  controlHeight: 36,
                  fontFamily: "'Roboto Mono', monospace",
                },
                Descriptions: {
                  labelBg: "#fafafa",
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
