"use client"

import React from 'react'
import { colors } from '@/lib/colors'
import { animations } from '@/lib/animations'

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', asChild = false, ...props }, ref) => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: animations.transition.all,
      textDecoration: 'none',
      position: 'relative' as const,
      overflow: 'hidden' as const,
    }

    const variants = {
      primary: {
        backgroundColor: colors.buttonPrimaryBg,
        color: colors.buttonPrimaryText,
      },
      secondary: {
        backgroundColor: colors.buttonSecondaryBg,
        color: colors.buttonSecondaryText,
        border: `1px solid ${colors.buttonSecondaryBorder}`,
      },
      ghost: {
        backgroundColor: 'transparent',
        color: colors.textSecondary,
      },
      outline: {
        backgroundColor: 'transparent',
        color: colors.primaryOrange,
        border: `1px solid ${colors.primaryOrange}`,
      }
    }

    const sizes = {
      sm: {
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
      },
      md: {
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
      },
      lg: {
        padding: '1rem 2rem',
        fontSize: '1rem',
      }
    }

    const hoverStyles = {
      primary: {
        backgroundColor: colors.buttonPrimaryHover,
        transform: 'translateY(-1px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      secondary: {
        backgroundColor: colors.buttonSecondaryHover,
        transform: 'translateY(-1px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      ghost: {
        backgroundColor: colors.buttonGhostHover,
        color: colors.textPrimary,
      },
      outline: {
        backgroundColor: colors.primaryOrange,
        color: colors.buttonPrimaryText,
      }
    }

    const buttonStyle = {
      ...baseStyles,
      ...variants[variant],
      ...sizes[size],
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget
      Object.assign(button.style, hoverStyles[variant])
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget
      Object.assign(button.style, buttonStyle)
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget
      button.style.transform = 'translateY(0)'
      button.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget
      Object.assign(button.style, hoverStyles[variant])
    }

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        style: buttonStyle,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        className: `${children.props.className || ''} ${className}`.trim(),
      })
    }

    return (
      <button
        ref={ref}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={className}
        {...props}
      >
        {children}
        <span
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.2)',
            transform: 'skewX(-12deg) translateX(-100%)',
            transition: 'transform 1s',
            pointerEvents: 'none',
          }}
          className="shimmer-effect"
        />
      </button>
    )
  }
)

EnhancedButton.displayName = 'EnhancedButton'