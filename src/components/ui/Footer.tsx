export default function Footer() {
    return (
      <footer className="mt-20 border-t/50">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shireen Meher · Built with Next.js, Tailwind, Framer Motion
        </div>
      </footer>
    );
  }
  