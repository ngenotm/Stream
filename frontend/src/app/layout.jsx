import { ToastContainer } from "react-toastify";

import { manrope } from "@/constants/Fonts";
import MainLayout from "@/components/layout/MainLayout";

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';



export const metadata = {
  title: "StreamVibe",
  description: "StreamVibe is a video streaming platform that allows you to watch your favorite movies and TV shows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} custom-scrollbar custom-scrollbar-md bg-c-black-08`}>
        <MainLayout>
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick={true}
          />
        </MainLayout>
      </body>
    </html>
  );
}
