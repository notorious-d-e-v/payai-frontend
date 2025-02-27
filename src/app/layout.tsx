import type { Metadata } from "next";
import { Inter, Work_Sans, JetBrains_Mono} from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"], weight: ["600", "700", "800"] });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "500"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"] });


export const metadata: Metadata = {
  title: "PayAI: AI Agent Economy",
  description: "PayAI is a decentralized marketplace where AI Agents exchange services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
