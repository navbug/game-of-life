import '~/styles/globals.css';

export const metadata = {
  title: "Conway's Game of Life",
  description: "Conway's Game of Life implemented with T3 Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}