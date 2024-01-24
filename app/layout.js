import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Premier League 2023/2024 Standings Football/England",
  description: "Football standings project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
