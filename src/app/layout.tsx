import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      
      
      <body className={poppins.className}>
     
        <Header1 />
        <Header2 />
        <Navbar />

        {children}
        <Footer />
        
        
        
        </body>
    </html>
  );
}
