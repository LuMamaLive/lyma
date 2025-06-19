export const metadata = {
  title: 'LuMama',
  description: 'Your pregnancy journey starts here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
