"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { projects } from "@/components/projects-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Building, Code } from "lucide-react"
import ImageSlider from "@/components/image-slider"

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Sample project images (placeholders)
  const projectImages = [
    "/placeholder.svg?height=400&width=800",
    "/placeholder.svg?height=400&width=800",
    "/placeholder.svg?height=400&width=800",
    "/placeholder.svg?height=400&width=800",
  ]

  useEffect(() => {
    if (params.slug) {
      const foundProject = projects.find((p) => p.id === params.slug)
      if (foundProject) {
        setProject(foundProject)
      }
      setLoading(false)
    }
  }, [params.slug])

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

  return (
    <div className="min-h-screen bg-white dark:bg-[#121628] noise-bg">
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
                  This project was developed to address the growing need for efficient job matching and resume scoring
                  in the modern job market. By leveraging AI technologies and advanced algorithms, the platform provides
                  accurate assessments of candidate qualifications and job requirements, streamlining the hiring process
                  for both employers and job seekers.
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
                  <li>AI-powered resume analysis and scoring</li>
                  <li>Intelligent job matching algorithms</li>
                  <li>Automated user recommendations</li>
                  <li>Advanced analytics dashboard</li>
                  <li>Responsive design for all devices</li>
                  <li>Optimized performance with server-side rendering</li>
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
                  <li>Led the development of the Enterprise and Admin portals</li>
                  <li>Implemented SEO optimizations resulting in improved search visibility</li>
                  <li>Integrated ChatGPT API for intelligent resume analysis</li>
                  <li>Optimized CI/CD pipelines for efficient deployments</li>
                  <li>Improved system performance by 30% through server-side rendering</li>
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline flex items-center gap-1"
                  >
                    {project.link.replace("https://", "")} <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div>
                  <Button
                    asChild
                    className="w-full magnetic-button relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0 transition-all duration-300"
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
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, i: number) => (
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
    </div>
  )
}

