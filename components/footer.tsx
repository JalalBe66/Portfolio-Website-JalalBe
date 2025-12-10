import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/icon-light-32x32.jpeg" alt="Jalal Belych Logo" width="50px" />
            <span className="text-muted-foreground">© {new Date().getFullYear()} Jalal Belych</span>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground font-mono text-sm">
            <span className="text-accent/50">{"{ }"}</span>
            <Link href="#about" className="hover:text-accent transition-colors">
              À Propos
            </Link>
            <span className="text-accent/50">{"</>"}</span>
            <Link href="#projects" className="hover:text-accent transition-colors">
              Projets
            </Link>
            <span className="text-accent/50">{"=>"}</span>
            <Link href="#contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground font-mono">
          Développé avec <span className="text-accent">Laravel</span> & <span className="text-accent">React</span>
        </div>
      </div>
    </footer>
  )
}
