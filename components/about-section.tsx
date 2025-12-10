export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 tracking-tight">À PROPOS</h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Je suis <span className="text-foreground font-semibold">Jalal Belych</span>, développeur full-stack
              Laravel freelance basé à Casablanca. Passionné par le développement web, l'architecture MVC,
              l'optimisation des bases de données, la création d'API REST, la sécurité et la construction d'applications
              fiables et performantes.
            </p>
            <p>
              Titulaire d'un <span className="text-accent">Bac +2 en Développement Digital</span> option Full Stack de
              l'ISTAG, je suis certifié MOS Word 2016 et Cisco Programming Essentials in Python. Mon expérience inclut
              des projets en freelance et un stage enrichissant chez ONET.
            </p>
            <p>
              Dynamique, motivé, créatif et engagé, je suis habitué à travailler en équipe tout en étant autonome. Je
              maîtrise les méthodes agiles comme Scrum et Kanban, ainsi que les outils de gestion de version (Git,
              GitHub) et de qualité (SonarQube).
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-mono">21</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-2">Ans</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-mono">3+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-2">Projets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-mono">Bac+2</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-2">DTS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent font-mono">3</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-2">Langues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
