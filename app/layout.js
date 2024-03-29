import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { AppProvider } from "../context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CharityQuest",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <NavBar/>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
