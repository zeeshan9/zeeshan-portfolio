"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Calendar, Building, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const experiences = [
  {
    id: "global-rescue",
    title: "Senior Full Stack Engineer",
    company: "Global Rescue",
    period: "Nov 2021 – Present",
    location: "Islamabad, Pakistan",
    workType: "Full-Time, Hybrid",
    website: "https://www.globalrescue.com",
    achievements: [
      "Engineered cross-platform responsive applications, improving compatibility & performance.",
      "Leveraged CI/CD tools for seamless deployments, ensuring high availability & cloud scalability.",
      "Improved efficiency, leading to a 40% boost in performance by optimizing caching, database queries, & API response times.",
    ],
    responsibilities: [
      "Lead development of mission-critical applications for emergency response and medical evacuation services",
      "Architect and implement scalable cloud solutions using AWS infrastructure",
      "Collaborate with cross-functional teams to deliver high-quality software solutions",
      "Mentor junior developers and conduct code reviews to maintain code quality",
    ],
    technologies: ["Angular", "React", "Node.js", "Maria DB", "Express", "RESTful APIs", "Microservices", "Agile"],
  },
  {
    id: "skilledscore",
    title: "Senior Software Engineer",
    company: "SkilledScore & Visa Bridge",
    period: "Sep 2024 – Feb 2025",
    location: "Harlem Road, Buffalo NY",
    workType: "Contract (Part-Time, Remote)",
    website: "https://www.skilledscore.com",
    achievements: [
      "Built features & fixed bugs in SkilledScore(10M+ users) using React, Next, Node & AWS boosting performance 30% via SSR.",
      "Enhanced search visibility by 20% via SEO optimization & FB event tracking to analyze product engagement.",
      "Led Agile/Scrum deployments with Git, AWS, & Slack alerts for production issues, ensuring 99% uptime & smooth releases.",
    ],
    responsibilities: [
      "I worked here remotely as a contract-based part-time developer.",
      "Develop and maintain core features for the SkilledScore platform serving 10M+ users",
      "Implement SEO optimizations and performance enhancements",
      "Lead deployment processes and ensure system stability",
      "Collaborate with product managers to define and implement new features",
    ],
    technologies: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Redis", "Agile/Scrum", "SEO"],
  },
  {
    id: "deltashoppe",
    title: "Associate Full-Stack Developer",
    company: "DeltaShoppe",
    period: "Jan 2020 – Nov 2021",
    location: "Phase 1V Islamabad, Pakistan",
    workType: "Full-Time, On-Site",
    website: "https://www.deltashoppe.com",
    achievements: [
      "Collaborated on front-end & back-end development using Angular, React, & Node.js in a Microservices architecture.",
      "Designed database schemas and APIs, ensuring robust & secure data transactions.",
      "Improved development efficiency by integrating Agile methodologies.",
    ],
    responsibilities: [
      "Develop and maintain e-commerce applications using Angular and React",
      "Design and implement RESTful APIs and database schemas",
      "Collaborate with UX/UI designers to implement responsive designs",
      "Participate in Agile ceremonies and contribute to sprint planning",
    ],
    technologies: ["Angular", "React", "ASP.NET Core", "MS SQL Server", "Express", "RESTful APIs", "Microservices", "Agile"],
  },
  {
    id: "techswitch",
    title: "Junior Software Developer",
    company: "devstarx - Formerly TechSwitch",
    period: "Aug 2018 – Dec 2019",
    location: "Islamabad, Pakistan",
    workType: "Full-Time, On-Site",
    website: "https://devstarx.com/",
    achievements: [
      "Launched software development career with a focus on refining React expertise.",
      "Contributed to multiple successful projects while adopting best practices in coding & development.",
    ],
    responsibilities: [
      "Develop front-end components using React and JavaScript",
      "Implement responsive designs and ensure cross-browser compatibility",
      "Fix bugs and improve existing features",
      "Participate in code reviews and team meetings",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Git", "Responsive Design", "RESTful APIs"],
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineRef = useRef<HTMLDivElement | null>(null)

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

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10 noise-bg"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent dark:from-secondary/10 dark:to-transparent -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 reveal"
          ref={(el) => (timelineRef.current = el)}
        >
          <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
            Work Experience
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full z-0 fade-in"
            ref={(el) => (timelineRef.current = el)}
            style={{
              opacity: 0,
              transition: "opacity 1.5s ease",
            }}
          ></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative z-10">
                <div
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`flex flex-col md:flex-row items-start gap-4 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right md:flex-row-reverse" : "md:pl-8"
                  } ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-primary dark:border-primary z-20">
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 pt-2">
                    <Card className="tilt-effect border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary"></div>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2">
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            {exp.title}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="w-fit bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary border-primary/20 dark:border-primary/30 flex items-center gap-1"
                          >
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-secondary dark:text-secondary font-medium flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="transition-all duration-300 hover:text-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex justify-end">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:border-primary/50"
                          >
                            <Link href={`/experience/${exp.id}`} className="flex items-center gap-2">
                              View Details <Info className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center scale-in" ref={(el) => (cardRefs.current[4] = el)}>
          <h3 className="text-2xl font-semibold mb-6 inline-flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-secondary" />
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
              Education
            </span>
          </h3>
          <Card className="tilt-effect border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm max-w-2xl mx-auto overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <CardContent className="p-6 tilt-content">
              <h4 className="font-bold text-lg">Bachelor of Science in Software Engineering - BS (SE)</h4>
              <p className="text-muted-foreground flex items-center justify-center gap-2 mt-2">
                <Calendar className="h-4 w-4 text-primary" />
                COMSATS University, Islamabad Campus | 2016 – 2020
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

