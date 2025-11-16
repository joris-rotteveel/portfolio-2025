import type { Metadata } from "next";
import "@/styles/globals.css";

import { Sohne } from "@/utils/fontLoader";
export const metadata: Metadata = {
  title: "Joris - Developer & Technical Lead",
  description:
    "Developer based in New Plymouth, Aotearoa New Zealand. Technical Lead passionate about collaboration between Design, Project Management and Developers. 20+ years of experience with brand websites, portfolios, museum installations and web applications.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Joris - Developer & Technical Lead",
    description:
      "Developer based in New Plymouth, Aotearoa New Zealand. Technical Lead passionate about collaboration between Design, Project Management and Developers.",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary",
    title: "Joris - Developer & Technical Lead",
    description:
      "Developer based in New Plymouth, Aotearoa New Zealand. Technical Lead passionate about collaboration between Design, Project Management and Developers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Sohne.variable} antialiased font-sohne`}>
        {children}
      </body>
    </html>
  );
}
