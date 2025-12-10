"use client"

import { useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"

const projects = [
  {
    title: "TECHINTER",
    subtitle: "Gestion des Interventions T2F SYSTEMS",
    description:
      "Application web complète avec authentification (Laravel Fortify + LDAP), gestion avancée des rôles (T2FAdmin, Administrateur, Superviseur, Chef d'agence), suivi des interventions, traitement des réclamations, automatisation des rapports (scheduler), et notifications dynamiques.",
    technologies: ["Laravel", "Fortify", "LDAP", "MySQL", "Blade"],
    type: "Freelance",
    href: "https://espaceclients.ma",
    featured: true,
    github: "https://github.com/JalalBe66/TECHINTER"
  },
  {
    title: "SDO",
    subtitle: "Plateforme de Documentation ONET",
    description:
      "Une plateforme de partage de documentation pour l'entreprise ONET avec fonctionnalités de partage et notifications par email.",
    technologies: ["Laravel", "MySQL", "Git", "SonarQube"],
    type: "Stage",
    featured: false,
    github: "https://github.com/JalalBe66/Document-Sharing"
  },
  {
    title: "ESL",
    subtitle: "Assistant IA pour Projets",
    description:
      "Un site utilisant l'IA pour faciliter la compréhension des projets et améliorer la productivité des développeurs.",
    technologies: ["React", "AI", "JavaScript"],
    type: "Personnel",
    featured: false,
    github: "https://github.com/JalalBe66/Smart-Context",
    href: "https://jalalbe66.github.io/Smart-Context/"

  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 tracking-tight">PROJETS</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer p-6 border transition-all duration-300 hover:-translate-y-1 ${project.featured
                ? "bg-accent/10 border-accent lg:col-span-2 lg:row-span-2"
                : "bg-card border-border hover:border-accent"
                }`}
            >
              {project.featured && (
                <span className="inline-block font-mono text-xs text-background bg-accent px-2 py-1 mb-4">
                  FEATURED
                </span>
              )}
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{project.type}</span>
              <h3
                className={`font-bold text-foreground mt-2 group-hover:text-accent transition-colors ${project.featured ? "text-2xl" : "text-xl"
                  }`}
              >
                {project.title}
              </h3>
              <p className="text-accent font-mono text-sm mt-1">{project.subtitle}</p>
              <p className={`text-muted-foreground mt-4 leading-relaxed ${project.featured ? "" : "line-clamp-3"}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, project.featured ? undefined : 3).map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2 py-1 border border-border text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card border border-accent max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">{selectedProject.type}</span>
                  <h3 className="text-3xl font-bold text-foreground mt-2">{selectedProject.title}</h3>
                  <p className="text-accent font-mono">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-mono px-3 py-1 bg-accent/10 text-accent border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a target="_blank" href={selectedProject.github} className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-mono text-sm">
                  <Github size={18} />
                  Code Source
                </a>
                <a href={selectedProject.href} target="_blanc" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-mono text-sm">
                  <ExternalLink size={18} />
                  Voir le Projet
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
