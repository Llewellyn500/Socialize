import './globals.css';

export const metadata = {
  title: 'Socialize',
  description: 'A simple Linktree clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-accent min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
