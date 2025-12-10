import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Download, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient with tech symbols */}
      <div className="absolute inset-0  from-background via-background to-card">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-accent text-6xl font-mono">{"{ }"}</div>
          <div className="absolute top-40 right-20 text-accent text-4xl font-mono">{"</>"}</div>
          <div className="absolute bottom-40 left-1/4 text-accent text-5xl font-mono">{"<?php"}</div>
          <div className="absolute bottom-20 right-1/3 text-accent text-3xl font-mono">{"=>"}</div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="font-mono text-accent text-sm tracking-widest uppercase">Bonjour, je suis</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground my-20 ">JALAL BELYCH</h1>
            <p className="text-xl text-muted-foreground font-mono">
              Développeur Full-Stack Laravel <span className="text-[#ce9f67]">Freelancer</span>
            </p>
            <p className="text-xl font-semibold text-[#ce9f67] my-4 max-w-lg leading-relaxed">
              ''From idea to production — Laravel is my path''
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent text-background px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                <Mail size={18} />
                Me Contacter
              </Link>
              <a
                href="/JalalBelychCV3.pdf"
                download
                className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-accent hover:text-background transition-colors"
              >
                <Download size={18} />
                Télécharger CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
              <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4" />
              <div className="relative w-full h-full bg-card overflow-hidden">
                <Image
                  src="/images/mypf.png"
                  alt="Jalal Belych - Développeur Full-Stack"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" className="text-accent">
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
