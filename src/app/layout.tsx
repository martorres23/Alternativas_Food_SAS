import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Alternativas Food SAS | Fruver, Abarrotes y Refrigerios Institucionales",
  description: "Distribuidor de fruver, abarrotes y refrigerios institucionales con los más altos estándares de inocuidad y logística nacional.",
  keywords: [
    "Fruver",
    "Abarrotes",
    "Refrigerios institucionales",
    "Distribución de alimentos",
    "Frutas y verduras Colombia",
    "Logística de alimentos Colombia",
    "Alternativas Food SAS",
    "Suministro de alimentos restaurantes",
  ],
  authors: [{ name: "Alternativas Food SAS" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.alternativasfood.com.co",
    title: "Alternativas Food SAS | Fruver, Abarrotes y Refrigerios",
    description: "Distribución de fruver, abarrotes y refrigerios institucionales de alta calidad.",
    siteName: "Alternativas Food SAS",
  },
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
