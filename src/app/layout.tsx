import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Assignment | Ipsator",
    template: "%s | Ipsator",
  },
  description: "Page Listing Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="mt-8 py-1 px-6 fixed bottom-0 left-0 right-0 shadow-inner text-center bg-gray-600 text-white">
          &copy; Pankajsree Das
        </footer>
      </body>
    </html>
  );
}
