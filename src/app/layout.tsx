import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { ClientProvider } from "@/components/ClientContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pictet",
  description: "Welcome to Pictet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <ClientProvider>
          <Layout>{children}</Layout>
        </ClientProvider>
      </body>
    </html>
  );
}
