import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CryptoInfoDaily</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-darkBg text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
