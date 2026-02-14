import type { Metadata } from "next";
import "./styles/variables.css";
import "./styles/base.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lilac Template | Therapy for Adults in Minneapolis, MN",
  description: "Individual therapy services for adults in Minneapolis, Minnesota. Specializing in self-esteem, relationships, and burnout.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
