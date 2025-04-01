"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight, Code, Server, Database, Globe, Info, Briefcase, TrendingUp, Wind, Scissors, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"

export const projects = [
  {
    id: "skilledscore",
    title: "SkilledScore",
    description: "AI-Powered Job Matching Platform",
    company: "SkilledScore",
    link: "https://skilledscore.com",
    image: "/assets/images/projects/skilledscore-1.png",
    color: "from-blue-500 to-blue-600",
    icon: <Briefcase className="h-6 w-6" />,
    tech: ["React.js", "Node.js", "OPEN AI API", "MySQL", "TypeScript", "Tailwind CSS", "Docker", "AWS" ],
    details: "A modern job matching platform that leverages AI to connect job seekers with their ideal positions.",
  },
  {
    id: "kangaroo-ventures",
    title: "Kangaroo Ventures",
    description: "Investment Portfolio Management",
    company: "Kangaroo Ventures",
    link: "https://kangaroo.ventures/",
    image: "/assets/images/projects/kangaroo-ventures-1.png",
    color: "from-green-500 to-green-600",
    icon: <TrendingUp className="h-6 w-6" />,
    tech: ["React", "FastApi", "PostgreSQL", "Python", "Alchemy ORM", "AWS"],
    details: "A comprehensive platform for managing investment portfolios and tracking market trends.",
  },
  {
    id: "freshair-sensor",
    title: "FreshAir",
    description: "Air Quality Monitoring System",
    company: "FreshAir",
    link: "https://freshairsensor.com/",
    image: "/assets/images/projects/freshair-sensor-1.png",
    color: "from-purple-500 to-purple-600",
    icon: <Wind className="h-6 w-6" />,
    tech: ["Anuglar", "NestJs", "MariaDB", "MicroServices", "Microservices"],
    details: "An innovative system for monitoring and improving indoor air quality in real-time.",
  },
  {
    id: "visa-bridge",
    title: "Visa Bridge AI",
    description: "AI-Powered Immigration Assistant",
    company: "Visa Bridge AI",
    link: "https://visabridge.ai",
    image: "/assets/images/projects/visa-bridge-1.png",
    color: "from-indigo-500 to-indigo-600",
    icon: <Globe className="h-6 w-6" />,
    tech: ["React", "TypeScript", "OpenAI API", "MySQL", "Tailwind CSS"],
    details: "An intelligent platform that helps users navigate the complex world of international visas and immigration.",
  },
  {
    id: "true-to-form",
    title: "True to Form",
    description: "3D Tailoring Platform",
    company: "True to Form",
    link: "https://www.truetoform.fit/",
    image: "/assets/images/projects/true-to-form-1.png",
    color: "from-pink-500 to-pink-600",
    icon: <Scissors className="h-6 w-6" />,
    tech: ["React", "Three.js", "Firebase", "TypeScript", "Tailwind CSS", "Cloud Functions"],
    details: "A revolutionary 3D platform for clothing designers to create and manage custom-fit garments.",
  },
  {
    id: "neuroqur",
    title: "Neuroqur",
    description: "Neurology Content Platform",
    company: "Neuroqur",
    link: "https://neuroqur.codesorbit.net/",
    image: "/assets/images/projects/neuroqur-1.png",
    color: "from-yellow-500 to-yellow-600",
    icon: <BookOpen className="h-6 w-6" />,
    tech: ["Angular", "Node.js", "MySQL", "Stripe", "ngx Editor", "TypeScript"],
    details: "A blogging platform for neurology content with features like article writing, role-based access, and subscription-based access to premium content.",
  },
  {
    id: "partie",
    title: "Partie",
    description: "Social Event Planning Platform",
    company: "Partie",
    link: "https://partie.com",
    image: "/assets/images/projects/partie-1.png",
    color: "from-orange-500 to-orange-600",
    icon: <Calendar className="h-6 w-6" />,
    tech: ["Angular", "ASP.NET CORE", "MS AQL SERVE", "AZURE", "Socket.io"],
    details: "A social platform for planning and organizing events with friends and family.",
  },
  {
    id: "gufhtugu",
    title: "Gufhtugu",
    description: "Pakistan’s leading online bookstore.",
    company: "Gufhtugu Publications",
    link: "https://gufhtugu.us",
    image: "/assets/images/projects/gufhtugu-1.png",
    color: "from-red-500 to-red-600",
    icon: <Code className="h-6 w-6" />,
    tech: ["Next Js", "Node", "TypeScript", "Tailwind CSS", "AWS S3", "Stripe"],
    details: "Gufhtugu Publications is Pakistan’s largest online bookstore, specializing in Urdu, English, and tech-focused books.",
  },
  // {
  //   id: "text-highlight-index",
  //   title: "Text-Highlight-Index",
  //   description: "NPM Package for Text Highlighting",
  //   company: "Open Source",
  //   link: "https://www.npmjs.com/package/text-highlight-index",
  //   image: "/assets/images/projects-highlight/highlight-1.png",
  //   color: "from-red-500 to-red-600",
  //   icon: <Code className="h-6 w-6" />,
  //   tech: ["TypeScript", "JavaScript", "NPM", "Jest", "Documentation"],
  //   details: "A lightweight and flexible NPM package for managing text highlights with index tracking.",
  // },
]

const getGradient = (color: string) => {
  const gradients: Record<string, string> = {
    primary: "from-primary to-primary/80 dark:from-primary dark:to-primary/80",
    secondary: "from-secondary to-secondary/80 dark:from-secondary dark:to-secondary/80",
    purple: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
    green: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
  }
  return gradients[color] || gradients.primary
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

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

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project)
      })
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10 noise-bg"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-secondary/5 to-transparent dark:from-secondary/10 dark:to-transparent -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 reveal"
          ref={(el) => (projectRefs.current[projects.length] = el)}
        >
          <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
            Featured Projects
          </span>
        </h2>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={index % 2 === 0 ? "blur-in" : "scale-in"}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full flex flex-col tilt-effect border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getGradient(project.color)}`}
                ></div>
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  <img
                    src={project.image || "/placeholder.svg?height=200&width=400"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                    <Badge
                      className={`bg-gradient-to-r ${getGradient(project.color)} text-white border-0 flex items-center gap-1`}
                    >
                      {project.icon}
                      {project.company}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2 tilt-content">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow tilt-content">
                  <p className="text-muted-foreground mb-4">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 5).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="font-normal hover:bg-accent transition-colors duration-300 spotlight"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 5 && (
                      <Badge variant="outline" className="font-normal">
                        +{project.tech.length - 5} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="tilt-content flex gap-2">
                  <Button
                    asChild
                    className={`magnetic-button relative overflow-hidden group bg-gradient-to-r ${getGradient(project.color)} hover:opacity-90 border-0 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex-1`}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit Project <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:border-primary/50"
                  >
                    <Link href={`/projects/${project.id}`} className="flex items-center gap-2">
                      Details <Info className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="h-full flex flex-col tilt-effect border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getGradient(project.color)}`}
                    ></div>
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                      <img
                        src={project.image || "/placeholder.svg?height=200&width=400"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                        <Badge
                          className={`bg-gradient-to-r ${getGradient(project.color)} text-white border-0 flex items-center gap-1`}
                        >
                          {project.icon}
                          {project.company}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2 tilt-content">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow tilt-content">
                      <p className="text-muted-foreground mb-4">{project.details}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="font-normal spotlight">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="font-normal">
                            +{project.tech.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="tilt-content flex flex-col gap-2">
                      <Button
                        asChild
                        className={`magnetic-button relative overflow-hidden group bg-gradient-to-r ${getGradient(project.color)} hover:opacity-90 border-0 w-full`}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Visit Project{" "}
                          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10"
                      >
                        <Link href={`/projects/${project.id}`} className="flex items-center justify-center gap-2">
                          View Details <Info className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full hover:bg-primary/5 dark:hover:bg-primary/10"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-1 items-center">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setActiveIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-6 bg-primary dark:bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full hover:bg-primary/5 dark:hover:bg-primary/10"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

