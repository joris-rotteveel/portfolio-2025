import localFont from "next/font/local";

export const Sohne = localFont({
  src: [
    {
      path: "../assets/fonts/soehne/soehne-mono-web-kraftig.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/soehne/soehne-mono-web-buch.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sohne",
});
