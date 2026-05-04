import "./globals.css";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Header />

        <main className="ml-64 mt-16 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}