import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/sidebar/page";
import Navbar from "./component/navbar/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500","600", "700" ] , 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Sidebar />
        <Navbar />
        {children}</body>
    </html>
  );
}
