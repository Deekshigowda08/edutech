import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BravyNex",
  icons: {
    icon: "/images/ashwin_logo.png",
  },
  keywords: ["education", "technology", "courses", "learning"],
  authors: [{ name: "Ashwin" }],
  creator: "Ashwin",
  publisher: "Ashwin",
  openGraph: {
    title: "EduTech",
    description: "Empowering the Innovators of Tomorrow with Knowledge and Experience",
    url: "https://edutech.com",
    siteName: "EduTech",
    images: [
      {
        url: "/images/ashwin_logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
  description: "an educational platform that empowers the innovators of tomorrow with knowledge and experience.",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification-code",
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
