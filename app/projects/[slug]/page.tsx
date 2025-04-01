"use client"

import React, { useEffect, useState, useMemo } from "react"
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
      `/assets/images/projects/${params.slug}-1.png`,
      `/assets/images/projects/${params.slug}-2.png`,
      `/assets/images/projects/${params.slug}-3.png`,
      // `/assets/images/projects/${params.slug}-4.png`,
      // project.image || "/placeholder.svg?height=400&width=800",
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
      case "skilledscore":
        return "SkilledScore is an AI-powered job matching platform that enhances the hiring process by analyzing resumes and job descriptions using advanced AI algorithms. It provides accurate job recommendations and helps recruiters find the best candidates efficiently."  
      case "kangaroo-ventures":
        return "Kangaroo Ventures is dedicated to transforming businesses with a comprehensive suite of services, including virtual office spaces, business consultancy, and solutions that simplify operational complexities. Whether you're a startup or an established company, Kangaroo Ventures offers innovative approaches to help you grow and succeed in a competitive market.";    
      case "visa-bridge":          
        return "This project was developed to help users make informed decisions about international relocation and career opportunities. By leveraging AI technology and analyzing real-life experiences from social media platforms, the platform provides comprehensive guidance on living, working, and thriving in different countries."
      case "freshair-sensor":
        return "FreshAir is an innovative air quality monitoring system designed to provide real-time data on indoor air quality. By using IoT technology, it continuously tracks and improves air quality, ensuring healthier environments for homes and workplaces.";
      case "text-highlight-index":
        return "This project addresses the need for efficient text highlighting in web applications. The package provides a lightweight, flexible solution for managing text highlights with index tracking, making it ideal for search functionality and text annotation features."
      case "neuroqur":
        return "A Medium-like blogging platform specifically designed for neurology-related content. The platform enables content creators to write and share articles while implementing a subscription-based access model. Users can interact with content through highlighting, note-taking, and comprehensive history tracking features."
      case "partie":
        return "This project is a social event planning platform that helps users organize and manage events with friends and family. The platform features real-time collaboration, event scheduling, and interactive planning tools."
      case "true-to-form":
        return "This project revolutionizes the tailoring industry with a 3D platform for clothing designers. Features include 3D avatar creation from mobile uploads, Three.js integration for 3D model visualization, and comprehensive measurement tracking. Designers can approve or deny client requests, and the platform extensively uses Firebase for cloud functions, service accounts, and Firestore."
      case "gufhtugu":
        return "Gufhtugu Publications is Pakistan’s leading online bookstore, offering a wide range of Urdu and technology books. The platform provides seamless online purchasing, book recommendations, and efficient order management."    
        default:
        return "This project was developed to address the growing need for efficient job matching and resume scoring in the modern job market. By leveraging AI technologies and advanced algorithms, the platform provides accurate assessments of candidate qualifications and job requirements, streamlining the hiring process for both employers and job seekers."
    }
  }

  const getKeyFeatures = () => {
    switch (project.id) {
      case "skilledscore":
        return [
          "AI-driven resume and job matching",
          "ChatGPT-powered resume analysis",
          "Automated job recommendations",
          "Advanced search filters for job seekers and recruiters",
          "Secure user authentication with Firebase",
          "Responsive UI for mobile and desktop",
          "SEO-optimized pages for better visibility"
        ]
      case "kangaroo-ventures":
        return [
          "Virtual office space solutions",
          "Comprehensive business consultancy",
          "Cost-effective operational services",
          "Simplified solutions for business growth",
          "Tailored strategies for entrepreneurs and companies",
          "Client-centric approach for measurable success",
          "High client satisfaction rate (98%)"
        ]
      case "visa-bridge":
        return [
          "AI-powered country recommendations based on user profiles",
          "Comprehensive guides for international job markets",
          "Real-time analysis of social media experiences",
          "Detailed information about housing and lifestyle",
          "Personalized migration guides",
          "Interactive platform for career guidance"
        ]
      case "freshair-sensor":
          return [
            "Real-time indoor air quality monitoring",
            "IoT-based sensor integration",
            "NestJs backend with Maria DB database",
            "Angular frontend for seamless user interface",
            "Customizable alerts for air quality thresholds",
            "Mobile and desktop-friendly interface",
            "Analytics dashboard for air quality data visualization"
          ];
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
          "Role-based access control system",
          "Article writing and publishing",
          "Content subscription management",
          "Article highlighting and notes",
          "User history tracking",
          "Profile management system"
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
      case "gufhtugu":
        return [
          "Extensive collection of Urdu and technology books",
          "Secure online payment and order processing using Stripe",
          "Personalized book recommendations",
          "Seamless browsing and search functionality",
          "Mobile-friendly responsive design",
          "Efficient order tracking and management"
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
      case "skilledscore":
        return [
          "Implemented AI-powered resume analysis using ChatGPT API",
          "Optimized frontend performance using Next.js and server-side rendering",
          "Enhanced SEO, improving job listing visibility by 40%",
          "Developed job recommendation algorithms for better user experience",
          "Integrated Firebase authentication for secure user login",
          "Refactored and optimized API calls for faster response times"
        ]
      case "kangaroo-ventures":
        return [
          "Developed virtual office space solutions for businesses",
          "Provided comprehensive business consultancy for entrepreneurs",
          "Streamlined operational services to enhance business efficiency",
          "Created tailored growth strategies for both startups and established companies",
          "Focused on a client-centric approach to ensure measurable success",
          "Achieved a 98% client satisfaction rate through dedicated service and results"
        ];
      case "visa-bridge":
        return [
          "Developed the AI-powered recommendation system",
          "Implemented social media data analysis",
          "Created comprehensive country guides",
          "Built interactive user interface",
          "Integrated real-time data updates"
        ]
      case "freshair-sensor":
        return [
          "Developed real-time air quality monitoring system using IoT sensors",
          "Built the backend using Django and PostgreSQL for efficient data management",
          "Implemented Angular frontend for interactive and responsive user interface",
          "Created customizable alerts and notifications for air quality changes",
          "Designed an analytics dashboard for air quality data visualization",
          "Integrated mobile and desktop support for full accessibility"
        ];
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
          "Implemented role-based access control",
          "Developed article management system",
          "Integrated Stripe subscription",
          "Built highlighting and notes feature",
          "Created user profile and history system"
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
      case "gufhtugu":
        return [
          "Developed the frontend using Next.js and Tailwind CSS",
          "Implemented secure online payment integration using Stripe",
          "Optimized book search and recommendation algorithms",
          "Built an efficient order tracking system",
          "Enhanced website performance and SEO for better visibility"
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

