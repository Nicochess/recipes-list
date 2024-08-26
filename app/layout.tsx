import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/reset.css";
import Theme from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReciMe - Explore Recipes",
  description:
    "Discover and explore a curated collection of delicious recipes tailored to every skill level. Whether you're a beginner or a seasoned chef, find your next favorite dish and elevate your cooking with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Theme>
      <html lang="en">
        <body className={inter.className}>
          <GlobalStyles />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </Theme>
  );
}
