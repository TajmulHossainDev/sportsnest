import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "SportNest",
  description: "Book Sport Facilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
