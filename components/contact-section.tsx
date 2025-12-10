"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 tracking-tight">CONTACT</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Nom
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                Sujet
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block font-mono text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              <Send size={18} />
              Envoyer le Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:jalalbelych64@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>jalalbelych64@gmail.com</span>
                </a>
                <a
                  href="tel:+212688564917"
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                    <Phone size={20} />
                  </div>
                  <span>+212 6 88 56 49 17</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 flex items-center justify-center border border-border">
                    <MapPin size={20} />
                  </div>
                  <span>Sidi Moumen, Casablanca, Maroc</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-accent text-sm uppercase tracking-widest mb-6">Réseaux Sociaux</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/JalalBe66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jalal-belych-401876301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
