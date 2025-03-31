"use client"

import { useEffect, useState, useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import { projects } from "@/components/projects-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Building, Code } from "lucide-react"
import ImageSlider from "@/components/image-slider"

interface Project {
  id: string
  title: string
  description: string
  company: string
  link: string
  image: string
  color: string
  icon: React.ReactNode
  tech: string[]
  details: string
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Project images with fallback
  const projectImages = useMemo(() => {
    if (!mounted) return []
    if (!project) return Array(4).fill("/placeholder.svg?height=400&width=800")
    return [
      project.image || "/placeholder.svg?height=400&width=800",
      "/placeholder.svg?height=400&width=800",
      "/placeholder.svg?height=400&width=800",
      "/placeholder.svg?height=400&width=800",
    ]
  }, [project, mounted])

  useEffect(() => {
    setMounted(true)
    if (params.slug) {
      const foundProject = projects.find((p) => p.id === params.slug)
      if (foundProject) {
        setProject(foundProject)
      }
      setLoading(false)
    }
  }, [params.slug])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#121628]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#121628]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#121628]">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button asChild>
          <a href="/#projects">Back to Projects</a>
        </Button>
      </div>
    )
  }

  const getProjectOverview = () => {
    switch (project.id) {
      case "visa-bridge":
        return "This project was developed to help users make informed decisions about international relocation and career opportunities. By leveraging AI technology and analyzing real-life experiences from social media platforms, the platform provides comprehensive guidance on living, working, and thriving in different countries."
      case "text-highlight-index":
        return "This project addresses the need for efficient text highlighting in web applications. The package provides a lightweight, flexible solution for managing text highlights with index tracking, making it ideal for search functionality and text annotation features."
      case "neuroqur":
        return "This project combines modern AI technology with traditional Quranic learning. The platform offers personalized learning experiences and interactive features to help users better understand and memorize the Quran."
      case "partie":
        return "This project is a social event planning platform that helps users organize and manage events with friends and family. The platform features real-time collaboration, event scheduling, and interactive planning tools."
      case "true-to-form":
        return "This project revolutionizes the tailoring industry with a 3D platform for clothing designers. Features include 3D avatar creation from mobile uploads, Three.js integration for 3D model visualization, and comprehensive measurement tracking. Designers can approve or deny client requests, and the platform extensively uses Firebase for cloud functions, service accounts, and Firestore."
      default:
        return "This project was developed to address the growing need for efficient job matching and resume scoring in the modern job market. By leveraging AI technologies and advanced algorithms, the platform provides accurate assessments of candidate qualifications and job requirements, streamlining the hiring process for both employers and job seekers."
    }
  }

  const getKeyFeatures = () => {
    switch (project.id) {
      case "visa-bridge":
        return [
          "AI-powered country recommendations based on user profiles",
          "Comprehensive guides for international job markets",
          "Real-time analysis of social media experiences",
          "Detailed information about housing and lifestyle",
          "Personalized migration guides",
          "Interactive platform for career guidance"
        ]
      case "text-highlight-index":
        return [
          "Customizable text highlighting with index tracking",
          "TypeScript support for type safety",
          "Efficient text search functionality",
          "Lightweight and easy to integrate",
          "Comprehensive documentation",
          "Unit tests for reliability"
        ]
      case "neuroqur":
        return [
          "AI-powered Quran translations",
          "Personalized learning paths",
          "Interactive exercises and quizzes",
          "Progress tracking system",
          "Advanced NLP algorithms",
          "Mobile-responsive design"
        ]
      case "partie":
        return [
          "Real-time event planning and collaboration",
          "Interactive calendar integration",
          "Guest list management",
          "Budget tracking and sharing",
          "Location and venue suggestions",
          "Mobile-responsive design"
        ]
      case "true-to-form":
        return [
          "3D avatar creation from mobile uploads",
          "Three.js integration for 3D model visualization",
          "Comprehensive measurement tracking",
          "Designer approval workflow",
          "Firebase cloud functions integration",
          "Mobile-first responsive design"
        ]
      default:
        return [
          "AI-powered resume analysis and scoring",
          "Intelligent job matching algorithms",
          "Automated user recommendations",
          "Advanced analytics dashboard",
          "Responsive design for all devices",
          "Optimized performance with server-side rendering"
        ]
    }
  }

  const getContributions = () => {
    switch (project.id) {
      case "visa-bridge":
        return [
          "Developed the AI-powered recommendation system",
          "Implemented social media data analysis",
          "Created comprehensive country guides",
          "Built interactive user interface",
          "Integrated real-time data updates"
        ]
      case "text-highlight-index":
        return [
          "Designed and implemented the core highlighting functionality",
          "Developed TypeScript type definitions",
          "Created comprehensive test suite",
          "Wrote detailed documentation",
          "Optimized performance for large texts"
        ]
      case "neuroqur":
        return [
          "Developed AI-powered translation system",
          "Created personalized learning algorithms",
          "Implemented interactive exercise system",
          "Built progress tracking features",
          "Integrated NLP for text analysis"
        ]
      case "partie":
        return [
          "Developed real-time collaboration features",
          "Created interactive calendar system",
          "Implemented guest management system",
          "Built budget tracking functionality",
          "Integrated location services"
        ]
      case "true-to-form":
        return [
          "Developed 3D avatar generation system",
          "Created measurement tracking features",
          "Implemented designer approval workflow",
          "Built Firebase integration",
          "Optimized mobile performance"
        ]
      default:
        return [
          "Led the development of the Enterprise and Admin portals",
          "Implemented SEO optimizations resulting in improved search visibility",
          "Integrated ChatGPT API for intelligent resume analysis",
          "Optimized CI/CD pipelines for efficient deployments",
          "Improved system performance by 30% through server-side rendering"
        ]
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121628] noise-bg">
      {mounted && (
        <>
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent -z-10"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-secondary/5 to-transparent dark:from-secondary/10 dark:to-transparent -z-10"></div>

          <div className="container mx-auto px-4 py-24">
            <Button
              variant="ghost"
              className="mb-8 hover:bg-primary/5 dark:hover:bg-primary/10"
              onClick={() => router.push("/#projects")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ImageSlider images={projectImages} className="h-[400px] mb-8 shadow-lg" />

                <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    <span className="font-medium">{project.company}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Project Overview
                      </span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{project.details}</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      {getProjectOverview()}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Key Features
                      </span>
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {getKeyFeatures().map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        My Contribution
                      </span>
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {getContributions().map((contribution, index) => (
                        <li key={index}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="glass rounded-lg p-6 shadow-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Project Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Company</p>
                      <p className="font-medium">{project.company}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Project Type</p>
                      <p className="font-medium">{project.description}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      {project.id === "true-to-form" ? (
                        <div className="space-y-2">
                          <a
                            href="https://www.truetoform.fit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline flex items-center gap-1"
                          >
                            truetoform.fit <ExternalLink className="h-3 w-3" />
                          </a>
                          <a
                            href="https://truetoform.fit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline flex items-center gap-1"
                          >
                            truetoform.fit (Alternative) <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline flex items-center gap-1"
                        >
                          {project.link.replace("https://", "")} <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>

                    <div>
                      <Button
                        asChild
                        className="w-full magnetic-button relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0 transition-all duration-300"
                      >
                        <a
                          href={project.id === "true-to-form" ? "https://www.truetoform.fit/" : project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Visit Project <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="font-normal hover:bg-accent transition-colors duration-300 spotlight"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

