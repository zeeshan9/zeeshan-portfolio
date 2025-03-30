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
                  {project.id === "visa-bridge" 
                    ? "This project was developed to help users make informed decisions about international relocation and career opportunities. By leveraging AI technology and analyzing real-life experiences from social media platforms, the platform provides comprehensive guidance on living, working, and thriving in different countries."
                    : project.id === "text-highlight-index"
                    ? "This project addresses the need for efficient text highlighting in web applications. The package provides a lightweight, flexible solution for managing text highlights with index tracking, making it ideal for search functionality and text annotation features."
                    : project.id === "neuroqur"
                    ? "This project combines modern AI technology with traditional Quranic learning. The platform offers personalized learning experiences and interactive features to help users better understand and memorize the Quran."
                    : project.id === "true-to-form"
                    ? "This project simplifies form handling in React applications by providing a comprehensive validation and management system. It helps developers create robust forms with minimal effort while maintaining full control over validation rules and form state."
                    : project.id === "elara"
                    ? "This project revolutionizes content management by integrating AI capabilities. It helps content creators and managers streamline their workflow with intelligent content suggestions and automated optimization."
                    : "This project was developed to address the growing need for efficient job matching and resume scoring in the modern job market. By leveraging AI technologies and advanced algorithms, the platform provides accurate assessments of candidate qualifications and job requirements, streamlining the hiring process for both employers and job seekers."}
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
                  {project.id === "visa-bridge" ? (
                    <>
                      <li>AI-powered country recommendations based on user profiles</li>
                      <li>Comprehensive guides for international job markets</li>
                      <li>Real-time analysis of social media experiences</li>
                      <li>Detailed information about housing and lifestyle</li>
                      <li>Personalized migration guides</li>
                      <li>Interactive platform for career guidance</li>
                    </>
                  ) : project.id === "text-highlight-index" ? (
                    <>
                      <li>Customizable text highlighting with index tracking</li>
                      <li>TypeScript support for type safety</li>
                      <li>Efficient text search functionality</li>
                      <li>Lightweight and easy to integrate</li>
                      <li>Comprehensive documentation</li>
                      <li>Unit tests for reliability</li>
                    </>
                  ) : project.id === "neuroqur" ? (
                    <>
                      <li>AI-powered Quran translations</li>
                      <li>Personalized learning paths</li>
                      <li>Interactive exercises and quizzes</li>
                      <li>Progress tracking system</li>
                      <li>Advanced NLP algorithms</li>
                      <li>Mobile-responsive design</li>
                    </>
                  ) : project.id === "true-to-form" ? (
                    <>
                      <li>Dynamic form generation</li>
                      <li>Real-time validation</li>
                      <li>Custom validation rules</li>
                      <li>Form state management</li>
                      <li>TypeScript support</li>
                      <li>Comprehensive documentation</li>
                    </>
                  ) : project.id === "elara" ? (
                    <>
                      <li>AI-powered content suggestions</li>
                      <li>Automated SEO optimization</li>
                      <li>Content scheduling system</li>
                      <li>Analytics dashboard</li>
                      <li>Advanced caching system</li>
                      <li>User role management</li>
                    </>
                  ) : (
                    <>
                      <li>AI-powered resume analysis and scoring</li>
                      <li>Intelligent job matching algorithms</li>
                      <li>Automated user recommendations</li>
                      <li>Advanced analytics dashboard</li>
                      <li>Responsive design for all devices</li>
                      <li>Optimized performance with server-side rendering</li>
                    </>
                  )}
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
                  {project.id === "visa-bridge" ? (
                    <>
                      <li>Developed the AI-powered recommendation system</li>
                      <li>Implemented social media data analysis</li>
                      <li>Created comprehensive country guides</li>
                      <li>Built interactive user interface</li>
                      <li>Integrated real-time data updates</li>
                    </>
                  ) : project.id === "text-highlight-index" ? (
                    <>
                      <li>Designed and implemented the core highlighting functionality</li>
                      <li>Developed TypeScript type definitions</li>
                      <li>Created comprehensive test suite</li>
                      <li>Wrote detailed documentation</li>
                      <li>Optimized performance for large texts</li>
                    </>
                  ) : project.id === "neuroqur" ? (
                    <>
                      <li>Developed AI-powered translation system</li>
                      <li>Created personalized learning algorithms</li>
                      <li>Implemented interactive exercise system</li>
                      <li>Built progress tracking features</li>
                      <li>Integrated NLP for text analysis</li>
                    </>
                  ) : project.id === "true-to-form" ? (
                    <>
                      <li>Developed form validation engine</li>
                      <li>Created dynamic form generation system</li>
                      <li>Implemented state management solution</li>
                      <li>Built TypeScript type system</li>
                      <li>Wrote comprehensive documentation</li>
                    </>
                  ) : project.id === "elara" ? (
                    <>
                      <li>Developed AI content suggestion system</li>
                      <li>Implemented SEO optimization features</li>
                      <li>Created content scheduling system</li>
                      <li>Built analytics dashboard</li>
                      <li>Optimized caching system</li>
                    </>
                  ) : (
                    <>
                      <li>Led the development of the Enterprise and Admin portals</li>
                      <li>Implemented SEO optimizations resulting in improved search visibility</li>
                      <li>Integrated ChatGPT API for intelligent resume analysis</li>
                      <li>Optimized CI/CD pipelines for efficient deployments</li>
                      <li>Improved system performance by 30% through server-side rendering</li>
                    </>
                  )}
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

