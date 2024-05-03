import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: '#0080FF',
}

export const metadata = {
  title: "Incrix ERP",
  description: "Streamline Your Business, Simplify Success: ERP Made Easy",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "incrix",
    "erp",
    "billing",
    "incrixerp",
    "erp software",
    "free erp",
  ],
  authors: [
    { name: "Incrix Techlutions LLP" },
    {
      name: "Incrix Techlutions LLP",
      url: "https://www.linkedin.com/company/incrix/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icon-192x192.png" },
    { rel: "icon", url: "icon-192x192.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
