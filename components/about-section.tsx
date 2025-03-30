"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, User, Award } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const elementsRef = useRef<(HTMLElement | null)[]>([])
  const cardContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    if (cardContainerRef.current) {
      observer.observe(cardContainerRef.current)
      cardContainerRef.current.classList.add("stagger-animate")
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el)
      })
      if (cardContainerRef.current) {
        observer.unobserve(cardContainerRef.current)
      }
    }
  }, [])

  // Tilt effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-effect")

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
    }

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove)
      card.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove)
        card.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-[#121628] dark:to-[#1A1E45] -z-10 noise-bg"></div>

      {/* Animated shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl opacity-70 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl opacity-70 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 reveal"
          ref={(el) => (elementsRef.current[0] = el)}
        >
          <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="slide-in-left" ref={(el) => (elementsRef.current[1] = el)}>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              <h3 className="text-2xl font-semibold mb-4 pl-2 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Full-Stack Developer with AI Expertise
                </span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a Full-Stack Developer (MERN/MEAN) with 5+ years of expertise in building scalable, AI-driven web
              applications. I have extensive experience in React, Next.js, Angular, Node.js, and Cloud technologies.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I have a proven ability to enhance efficiency by automating workflows, optimizing performance, and
              implementing AI API integrations (OpenAI). I'm passionate about leveraging AI & automation to drive
              business growth.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/zeeshan9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-105 group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="h-4 w-4 text-primary" />
                </div>
                github.com/zeeshan9
              </a>
              <a
                href="https://linkedin.com/in/zeeshanmushtaq76"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-105 group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-primary" />
                </div>
                linkedin.com/in/zeeshanmushtaq76
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 slide-in-right stagger-animate" ref={cardContainerRef}>
            <Card className="tilt-effect border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500"></div>
              <CardContent className="p-6 flex flex-col items-center text-center tilt-content">
                <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-sm text-muted-foreground">zeeshanmushtaq76@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="tilt-effect border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-secondary"></div>
              <CardContent className="p-6 flex flex-col items-center text-center tilt-content">
                <div className="w-16 h-16 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-sm text-muted-foreground">+92 3038707170</p>
              </CardContent>
            </Card>

            <Card className="tilt-effect border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500"></div>
              <CardContent className="p-6 flex flex-col items-center text-center tilt-content">
                <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium mb-1">Experience</h4>
                <p className="text-sm text-muted-foreground">5+ Years Professional</p>
              </CardContent>
            </Card>

            <Card className="tilt-effect border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-secondary"></div>
              <CardContent className="p-6 flex flex-col items-center text-center tilt-content">
                <div className="w-16 h-16 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">Islamabad, Pakistan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

