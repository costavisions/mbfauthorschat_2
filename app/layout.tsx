import "./globals.css";
import { Public_Sans } from "next/font/google";
import { useRouter } from "next/router";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { basePath } = useRouter(); // Use basePath dynamically

  return (
    <html lang="en">
      <head>
        <title>MBF Chat</title>
        {/* Dynamically include basePath for the favicon */}
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
