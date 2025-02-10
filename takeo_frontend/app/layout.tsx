import "./globals.css";
import {Noto_Serif_JP} from "next/font/google";

const noto_jp = Noto_Serif_JP({
  display: "swap",
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <style>{`
          body {
            font-family: ${noto_jp.style.fontFamily};
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
