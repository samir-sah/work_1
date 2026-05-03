import "./globals.css";
import Sidebar from "../components/sidebar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />

        <main className="ml-64 mt-16 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}