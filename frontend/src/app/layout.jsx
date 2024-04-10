import { manrope } from "@/constants/Fonts";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "StreamVibe",
  description: "StreamVibe is a video streaming platform that allows you to watch your favorite movies and TV shows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-c-black-08`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
