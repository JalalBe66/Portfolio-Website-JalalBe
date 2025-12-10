"use client"

import { useState } from "react"

const skills = [
  { name: "Laravel", category: "Backend", level: 90 },
  { name: "PHP 8+", category: "Backend", level: 85 },
  { name: "MySQL", category: "Database", level: 85 },
  { name: "MongoDB", category: "Database", level: 70 },
  { name: "API REST", category: "Backend", level: 85 },
  { name: "React", category: "Frontend", level: 75 },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 80 },
  { name: "HTML5/CSS3", category: "Frontend", level: 90 },
  { name: "TailwindCSS", category: "Frontend", level: 85 },
  { name: "Node.js", category: "Backend", level: 70 },
  { name: "Git/GitHub", category: "Tools", level: 85 },
  { name: "Fortify/Auth", category: "Security", level: 80 },
  { name: "Livewire", category: "Frontend", level: 75 },
  { name: "Blade", category: "Frontend", level: 90 },
  { name: "UML", category: "Tools", level: 80 },
  { name: "SonarQube", category: "Tools", level: 70 },
]

const categories = ["Tous", "Backend", "Frontend", "Database", "Tools", "Security"]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredSkills =
    activeCategory === "Tous" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-12 tracking-tight">COMPÉTENCES</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-mono text-sm uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? "bg-accent text-background"
                  : "border border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-card border border-border hover:border-accent transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-mono text-foreground group-hover:text-accent transition-colors">{skill.name}</h3>
                <span className="text-sm text-accent font-mono">{skill.level}%</span>
              </div>
              <div className="h-1 bg-border overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-500 group-hover:bg-foreground"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 block font-mono">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
