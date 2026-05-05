import "./globals.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Sidebar />
        <Header />

        <main className="ml-64 mt-16 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}