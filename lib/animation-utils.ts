"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

export function createParticles(container: HTMLElement, count = 50) {
  for (let i = 0; i < count; i++) {
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
}

export function typeText(text: string, setText: (text: string) => void, speed = 100) {
  let i = 0
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      setText(text.substring(0, i + 1))
      i++
    } else {
      clearInterval(typingInterval)
    }
  }, speed)

  return () => clearInterval(typingInterval)
}

