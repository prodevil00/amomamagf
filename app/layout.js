import "./globals.css";
export const metadata = {
  title: "Scrape Amomama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
