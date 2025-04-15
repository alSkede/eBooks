export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white to-pink-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
