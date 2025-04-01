"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Frontend",
    icon: "💻",
    color: "primary",
    skills: ["React", "Next.js", "Angular", "HTML5", "CSS3", "Redux", "RxJS", "NgRx", "GraphQL", "Material UI", "Angular Material"],
  },
  {
    name: "Backend",
    icon: "🔧",
    color: "secondary",
    skills: ["Node/Express", "NestJS", "Fastapi", "Sequelize", "Microservices", "RESTful APIs", "WebSockets", "Redis", "Socket.io"],
  },
  {
    name: "DevOps & Tools",
    icon: "🚀",
    color: "green",
    skills: ["AWS (S3, Lambda, Runner, Amplify)", "Git", "GitHub", "GitHub workflows", "Docker", "GitHub Actions"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    color: "yellow",
    skills: ["MySQL","Maria DB", "Firebase", "SQL Server", "MongoDB", "PostgreSQL", "AWS RDS"],
  },
  {
    name: "Languages",
    icon: "📝",
    color: "red",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "SQL", "NoSQL", "JSON"],
  },
  {
    name: "AI & Automation",
    icon: "🤖",
    color: "purple",
    skills: ["OpenAI (ChatGPT API)", "AI-driven Features", "Claude AI", "AI API Integration"],
  },
]

const getGradient = (color: string) => {
  const gradients: Record<string, string> = {
    primary: "from-primary to-primary/80 dark:from-primary dark:to-primary/80",
    secondary: "from-secondary to-secondary/80 dark:from-secondary dark:to-secondary/80",
    purple: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
    green: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
    yellow: "from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500",
    red: "from-red-500 to-red-600 dark:from-red-400 dark:to-red-500",
  }
  return gradients[color] || gradients.primary
}

const getLightColor = (color: string) => {
  const colors: Record<string, string> = {
    primary: "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary",
    secondary: "bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    yellow: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  }
  return colors[color] || colors.primary
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-[#1A1E45] dark:to-[#121628] -z-10 noise-bg"></div>

      {/* Animated shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 reveal"
          ref={(el) => (cardRefs.current[skillCategories.length] = el)}
        >
          <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
            Technical Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="rotate-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="tilt-effect border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden h-full group hover:shadow-xl transition-all duration-300">
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getGradient(category.color)}`}
                ></div>
                <CardContent className="p-6 tilt-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${getLightColor(category.color)} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <h3
                      className={`text-lg font-semibold text-${category.color === "primary" ? "primary" : category.color === "secondary" ? "secondary" : category.color}-600 dark:text-${category.color === "primary" ? "primary" : category.color === "secondary" ? "secondary" : category.color}-400`}
                    >
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 ${getLightColor(category.color)} rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-md spotlight`}
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

