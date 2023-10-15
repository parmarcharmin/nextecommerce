import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import { LinearProgress } from "@mui/material";
import Fade from '@mui/material/Fade';
const inter = Inter({ subsets: ["latin"] });
import { StateContext } from "@/context/StateContext";
import { Providers } from "@/State/Providrers";
export const metadata = {
  title: "CharmNova : Where Elegance Meets Innovation in Every Stitch",
  description: "Where Elegance Meets Innovation in Every Stitch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Providers>
      <body className={inter.className}>
       <StateContext>
        <Cart />
        <div className="blur-container">
          <Navbar />
          {children}
          <Footer />
        </div>
        </StateContext>
      </body>
      </Providers>
    </html>
  );
}
