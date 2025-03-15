import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-google-analytics-opt-out="">
      <body>{children}</body>
    </html>
  );
}