import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://baksish.in"),
  title: {
    default: "Baksish | Table to Kitchen tech",
    template: "%s - Baksish",
  },
  alternates: {
    canonical: `https://www.baksish.in`,
  },
  description:
    "Efficient restaurant management system featuring scan and order, inventory control, billing, and analytics. Streamline operations effortlessly.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
