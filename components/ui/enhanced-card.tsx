"use client"

import React from 'react'
import { colors } from '@/lib/colors'
import { animations } from '@/lib/animations'

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass'
  hover?: boolean
  children: React.ReactNode
}

export const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ variant = 'default', hover = true, children, className = '', ...props }, ref) => {
    const baseStyles = {
      backgroundColor: colors.cardBackground,
      border: `1px solid ${colors.cardBorder}`,
      borderRadius: '0.75rem',
      padding: '1.5rem',
      transition: animations.transition.all,
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      position: 'relative' as const,
      overflow: 'hidden' as const,
    }

    const variants = {
      default: {},
      elevated: {
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }
    }

    const hoverStyles = {
      default: {
        backgroundColor: colors.cardBackgroundHover,
        borderColor: colors.cardBorderHover,
        transform: 'translateY(-4px) scale(1.02)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      elevated: {
        backgroundColor: colors.cardBackgroundHover,
        borderColor: colors.cardBorderHover,
        transform: 'translateY(-8px) scale(1.03)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-2px)',
      }
    }

    const cardStyle = {
      ...baseStyles,
      ...variants[variant],
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (hover) {
        const card = e.currentTarget
        Object.assign(card.style, hoverStyles[variant])
      }
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (hover) {
        const card = e.currentTarget
        Object.assign(card.style, cardStyle)
      }
    }

    return (
      <div
        ref={ref}
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`enhanced-card ${className}`}
        {...props}
      >
        {children}
        {hover && (
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
              opacity: 0,
              transition: 'opacity 0.5s ease',
              pointerEvents: 'none',
            }}
            className="spotlight-effect"
          />
        )}
      </div>
    )
  }
)

EnhancedCard.displayName = 'EnhancedCard'