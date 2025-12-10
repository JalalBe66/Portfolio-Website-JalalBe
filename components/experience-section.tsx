const experiences = [
  {
    title: "Développeur Freelance",
    company: "T2F SYSTEMS",
    period: "2024",
    description:
      "Développement de TECHINTER, une application web de gestion des interventions clients avec authentification sécurisée (Laravel Fortify + LDAP), gestion multi-profils et génération régulière de rapports.",
    technologies: ["Laravel", "MySQL", "Fortify", "LDAP"],
  },
  {
    title: "Stagiaire Développeur",
    company: "ONET",
    period: "2024",
    description:
      "Développement d'une application de gestion documentaire (SDO) avec intégration de fonctionnalités de partage et de notification par email.",
    technologies: ["Laravel", "Git", "GitHub", "SonarQube", "Figma", "Asana"],
  },
  {
    title: "Formation Soft Skills",
    company: "AMIDEAST / IDN",
    period: "Juillet - Août 2023",
    description:
      "Formation intensive en soft skills dans le cadre du programme EMPLOI FBR en partenariat avec AMIDEAST et IDN SIDI BERNOUSI.",
    technologies: ["Communication", "Travail d'équipe", "Leadership"],
  },
]

const education = [
  {
    degree: "DTS Développement Digital",
    school: "ISTAG Sidimoumen",
    period: "2022 - 2024",
    details: "Option Full Stack, Certifications MOS Word 2016 & Cisco Python",
  },
  {
    degree: "Baccalauréat Sciences Physiques",
    school: "Lycée El Mansour Dahbi",
    period: "2021 - 2022",
    details: "Sidimoumen, Casablanca",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 tracking-tight">EXPÉRIENCE</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-8">
              Expériences Professionnelles
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-accent">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent" />
                  <span className="font-mono text-sm text-accent">{exp.period}</span>
                  <h4 className="text-xl font-bold text-foreground mt-1">{exp.title}</h4>
                  <p className="text-muted-foreground font-mono text-sm">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 bg-background text-accent border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-8">Formation</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-border" />
                  <span className="font-mono text-sm text-muted-foreground">{edu.period}</span>
                  <h4 className="text-xl font-bold text-foreground mt-1">{edu.degree}</h4>
                  <p className="text-accent font-mono text-sm">{edu.school}</p>
                  <p className="text-muted-foreground mt-2">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-12">
              <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-6">Langues</h3>
              <div className="space-y-4">
                {[
                  { lang: "Arabe", level: "Natif" },
                  { lang: "Français", level: "Courant" },
                  { lang: "Anglais", level: "Intermédiaire" },
                ].map((item) => (
                  <div key={item.lang} className="flex justify-between items-center">
                    <span className="text-foreground">{item.lang}</span>
                    <span className="font-mono text-sm text-muted-foreground">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
