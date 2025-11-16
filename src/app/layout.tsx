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
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                // Pastel colors
                colorPrimary: "#B8D8E8",
                colorSuccess: "#C1E1C1",
                colorWarning: "#FDFD96",
                colorError: "#FFD1DC",
                colorInfo: "#D8BAFD",

                // Minimal design - no shadows, less border radius
                borderRadius: 4,
                boxShadow: "none",
                boxShadowSecondary: "none",
              },
              components: {
                Button: {
                  boxShadow: "none",
                  primaryShadow: "none",
                },
                Card: {
                  boxShadowTertiary: "none",
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
