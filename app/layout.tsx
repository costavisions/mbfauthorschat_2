import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const basePath = "/authors-chatbot"; // Use the base path directly

  return (
    <html lang="en">
      <head>
        <title>MBF Chat</title>
        {/* Use the static basePath */}
        <link
          rel="shortcut icon"
          href={`${basePath}/images/favicon.ico`}
        />
        <meta
          name="description"
          content="Miami Book Fair Authors AI Assistant"
        />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
