import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "OutBroker - A Revolução do Mercado Imobiliário",
  description: "A plataforma que vai mudar a forma como imóveis são encontrados, vendidos e fechados. Entre para a lista de espera.",
  keywords: "imóveis, corretores, imobiliária, compra, venda, aluguel, OutBroker",
  authors: [{ name: "OutBroker" }],
  openGraph: {
    title: "OutBroker - A Revolução do Mercado Imobiliário",
    description: "A plataforma que vai mudar a forma como imóveis são encontrados, vendidos e fechados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
