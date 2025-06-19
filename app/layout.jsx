export const metadata = {
  title: 'LuMama',
  description: 'Your pregnancy journey starts here.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
