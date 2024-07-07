import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import {Roboto} from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "First Next.js Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
