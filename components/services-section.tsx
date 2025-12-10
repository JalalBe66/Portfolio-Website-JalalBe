import { Code, Database, Globe, Server, Settings, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Développement Laravel",
    description:
      "Création d'applications web robustes et évolutives avec le framework Laravel, en suivant les meilleures pratiques MVC.",
  },
  {
    icon: Server,
    title: "Création d'API REST",
    description: "Conception et développement d'APIs RESTful sécurisées et bien documentées pour vos applications.",
  },
  {
    icon: Database,
    title: "Architecture Base de Données",
    description: "Optimisation et conception de bases de données MySQL et MongoDB pour des performances optimales.",
  },
  {
    icon: Globe,
    title: "Développement Web",
    description:
      "Création de sites web modernes et responsives avec React, TailwindCSS et les dernières technologies front-end.",
  },
  {
    icon: Shield,
    title: "Sécurité & Authentification",
    description:
      "Implémentation de systèmes d'authentification sécurisés avec Laravel Fortify, LDAP et gestion des rôles.",
  },
  {
    icon: Settings,
    title: "Maintenance & Évolutivité",
    description:
      "Support continu, maintenance et évolution de vos applications existantes pour assurer leur pérennité.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 tracking-tight">SERVICES</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Des solutions sur mesure pour transformer vos idées en applications web performantes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group p-8 bg-background border border-border hover:border-accent transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-background transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
