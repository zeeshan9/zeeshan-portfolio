"use client"

import * as React from "react"
import type { FC } from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowDown, Code, Cpu, Database, Globe, Server, Sparkles, Github, Linkedin, Mail, Phone, Copy, Check } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const HeroSection: FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const [typedText, setTypedText] = useState("")
  const fullText = "Zeeshan Mushtaq"
  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showCopyFeedback, setShowCopyFeedback] = useState(false)

  useEffect(() => {
    // Typing animation
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    // Intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    // Create floating particles
    const particlesContainer = document.querySelector(".particles")
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer as HTMLElement)
      }
    }

    // Create blobs
    const createBlobs = () => {
      const container = document.querySelector(".blob-container")
      if (!container) return

      const colors = ["bg-primary/20", "bg-secondary/20", "bg-purple-500/20", "bg-indigo-500/20"]

      for (let i = 0; i < 4; i++) {
        const blob = document.createElement("div")
        blob.classList.add("blob", colors[i % colors.length])

        // Random size between 300px and 500px
        const size = Math.random() * 200 + 300
        blob.style.width = `${size}px`
        blob.style.height = `${size}px`

        // Random position
        blob.style.left = `${Math.random() * 70}%`
        blob.style.top = `${Math.random() * 70}%`

        // Random animation delay
        blob.style.animationDelay = `${Math.random() * 5}s`

        container.appendChild(blob)
      }
    }

    createBlobs()

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && heroRef.current) {
        const { clientX, clientY } = e
        const { width, height, left, top } = heroRef.current.getBoundingClientRect()

        const x = (clientX - left) / width
        const y = (clientY - top) / height

        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(typingInterval)
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile])

  const createParticle = (container: HTMLElement) => {
    const particle = document.createElement("div")
    particle.classList.add("particle")

    // Random size between 5px and 20px
    const size = Math.random() * 15 + 5
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`

    // Random position
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`

    // Random color
    const hue = Math.random() * 360
    particle.style.backgroundColor = `hsla(${hue}, 70%, 70%, 0.2)`

    // Random animation duration between 15s and 45s
    const duration = Math.random() * 30 + 15
    particle.style.animationDuration = `${duration}s`

    // Random delay
    const delay = Math.random() * 5
    particle.style.animationDelay = `${delay}s`

    container.appendChild(particle)
  }

  const calculateTransform = (depth: number) => {
    if (isMobile) return {}

    const moveX = (mousePosition.x - 0.5) * depth
    const moveY = (mousePosition.y - 0.5) * depth

    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
    }
  }
  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-blue-50 dark:from-[#121628] dark:to-[#1E1A45] noise-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20"></div>
        <div className="particles"></div>
        <div className="blob-container absolute inset-0 overflow-hidden"></div>
      </div>

      {/* Floating tech icons with parallax effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Code
          className="absolute text-primary/30 dark:text-primary/20 w-32 h-32 top-1/4 left-1/4 floating"
          style={{ ...calculateTransform(-20), animationDelay: "0s" }}
        />
        <Database
          className="absolute text-secondary/30 dark:text-secondary/20 w-24 h-24 bottom-1/4 right-1/3 floating"
          style={{ ...calculateTransform(-15), animationDelay: "0.5s" }}
        />
        <Globe
          className="absolute text-purple-500/30 dark:text-purple-500/20 w-40 h-40 top-1/3 right-1/4 floating"
          style={{ ...calculateTransform(-25), animationDelay: "1s" }}
        />
        <Server
          className="absolute text-indigo-500/30 dark:text-indigo-500/20 w-28 h-28 bottom-1/3 left-1/3 floating"
          style={{ ...calculateTransform(-10), animationDelay: "1.5s" }}
        />
        <Cpu
          className="absolute text-primary/30 dark:text-primary/20 w-36 h-36 top-1/2 right-1/2 floating"
          style={{ ...calculateTransform(-30), animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="relative inline-block mb-6">
          <h1
            ref={textRef}
            className="text-5xl md:text-7xl font-bold mb-2 opacity-0 transition-all duration-1000 translate-y-8 glow"
            style={{ animationDelay: "200ms" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
              {typedText}
            </span>
            <span className="animate-pulse">|</span>
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full shimmer"></div>
        </div>

        <p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground opacity-0 transition-all duration-1000 translate-y-8 animate-in"
          style={{ animationDelay: "400ms" }}
        >
          A Full-Stack Software Engineer specializing in
          <span className="font-semibold text-primary"> MERN </span>&
          <span className="font-semibold text-secondary"> MEAN </span>
          stack development with 5+ years of experience building scalable, AI-driven web applications.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 transition-all duration-1000 translate-y-8 animate-in"
          style={{ animationDelay: "600ms" }}
        >
          <Button
            asChild
            size="lg"
            className="magnetic-button relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105"
          >
            <a href="#projects" className="flex items-center gap-2">
              <span>View My Work</span>
              <Sparkles className="h-4 w-4 group-hover:animate-pulse" />
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:border-primary/50"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social Media and Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 opacity-0 transition-all duration-1000 translate-y-8 animate-in" style={{ animationDelay: "800ms" }}>
          <a
            href="https://github.com/zeeshan9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-105 group"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Github className="h-4 w-4 text-primary" />
            </div>
            GitHub
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
            LinkedIn
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 text-sm hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-105 group">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                Email
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Email Address</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col space-y-4 mt-4">
                <p className="text-center text-xl font-medium">zeeshanmushtaq76@gmail.com</p>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={async () => {
                      await navigator.clipboard.writeText("zeeshanmushtaq76@gmail.com");
                      setShowCopyFeedback(true);
                      setTimeout(() => setShowCopyFeedback(false), 2000);
                    }}
                    className="flex items-center gap-2 hover:bg-primary/5 relative"
                  >
                    {showCopyFeedback ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy Email
                      </>
                    )}
                  </Button>
                  <Button
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    onClick={() => window.open('mailto:zeeshanmushtaq76@gmail.com', '_blank')}
                  >
                    <Mail className="h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 text-sm hover:text-primary dark:hover:text-primary transition-colors transform hover:scale-105 group">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                Phone
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact Number</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col space-y-4 mt-4">
                <p className="text-center text-xl font-medium">+92 303 8707170</p>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={async () => {
                      await navigator.clipboard.writeText("+923038707170");
                      setShowCopyFeedback(true);
                      setTimeout(() => setShowCopyFeedback(false), 2000);
                    }}
                    className="flex items-center gap-2 hover:bg-primary/5"
                  >
                    {showCopyFeedback ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy Number
                      </>
                    )}
                  </Button>
                  <Button
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    // onClick={() => window.open('tel:+923038707170', '_blank')}
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pulse">
        <a
          href="#about"
          aria-label="Scroll down"
          className="glass rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ArrowDown className="h-6 w-6 text-primary dark:text-primary" />
        </a>
      </div>
    </section>
  )
}

export default HeroSection

