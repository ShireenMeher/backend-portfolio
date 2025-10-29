export const metadata = {
  title: "Shireen Meher – Backend & Distributed Systems",
  description: "Portfolio of backend/distributed systems projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-app min-h-screen text-foreground">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
