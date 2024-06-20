import { Quicksand } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/providers";

const quicksand = Quicksand({ subsets: ["latin"], weight: ['300', '400', '500', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  );
}
