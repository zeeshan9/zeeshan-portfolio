"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { experiences } from "@/components/experience-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, MapPin, Briefcase } from "lucide-react"
import ImageSlider from "@/components/image-slider"

export default function ExperienceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [experience, setExperience] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Sample company images (placeholders)
  const companyImages = [
    `/assets/images/experience/${params.slug}-1.png`,
    `/assets/images/experience/${params.slug}-2.png`,
    `/assets/images/experience/${params.slug}-3.png`,
    // "/placeholder.svg?height=400&width=800",
  ]

  useEffect(() => {
    if (params.slug) {
      const foundExperience = experiences.find((e) => e.id === params.slug)
      if (foundExperience) {
        setExperience(foundExperience)
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

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#121628]">
        <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
        <Button asChild>
          <a href="/#experience">Back to Experience</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121628] noise-bg">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent dark:from-secondary/10 dark:to-transparent -z-10"></div>

      <div className="container mx-auto px-4 py-24">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-primary/5 dark:hover:bg-primary/10"
          onClick={() => router.push("/#experience")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Experience
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageSlider images={companyImages} className="h-[400px] mb-8 shadow-lg" />

            <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
              {experience.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{experience.company}</p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="font-medium">{experience.location}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Key Achievements
                  </span>
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {experience.achievements.map((achievement: string, i: number) => (
                    <li key={i} className="transition-all duration-300 hover:text-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Responsibilities
                  </span>
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {experience.responsibilities.map((responsibility: string, i: number) => (
                    <li key={i} className="transition-all duration-300 hover:text-foreground">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 inline-flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Company Overview
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.company} is a leading organization in its industry, providing innovative solutions to
                  clients worldwide. With a focus on quality and customer satisfaction, the company has established
                  itself as a trusted partner for businesses seeking reliable and efficient services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  During my time at {experience.company}, I had the opportunity to work on various challenging projects
                  that allowed me to grow professionally and contribute significantly to the company's success. The
                  collaborative work environment and emphasis on continuous learning made it an ideal place for career
                  development.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass rounded-lg p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Company Details
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Company Name</p>
                  <p className="font-medium">{experience.company}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Position</p>
                  <p className="font-medium">{experience.title}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{experience.period}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{experience.location}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Work Type</p>
                  <p className="font-medium">{experience.workType}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline flex items-center gap-1"
                  >
                    {experience.website.replace("https://", "")} <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div>
                  <Button
                    asChild
                    className="w-full magnetic-button relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0 transition-all duration-300"
                  >
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit Company <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                {experience.technologies.map((tech: string, i: number) => (
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

