import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: 'JNR | Portfolio',
  description: 'This is my portfolio website showcasing my skills and projects as a web developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className= "scroll-smooth ">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
