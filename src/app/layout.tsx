import { Inter } from "next/font/google";
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appointment App",
  description: "An app to make a hair salon appointments",
};

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}