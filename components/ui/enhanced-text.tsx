"use client"

import React from 'react'
import { textStyles } from '@/lib/typography'
import { colors } from '@/lib/colors'

interface EnhancedTextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyLarge' | 'body' | 'bodySmall' | 'caption' | 'overline' | 'link'
  as?: keyof JSX.IntrinsicElements
  gradient?: boolean
  children: React.ReactNode
}

export const EnhancedText = React.forwardRef<HTMLElement, EnhancedTextProps>(
  ({ variant = 'body', as, gradient = false, children, className = '', style = {}, ...props }, ref) => {
    const textStyle = textStyles[variant] || textStyles.body
    
    const gradientStyle = gradient ? {
      background: `linear-gradient(135deg, ${colors.primaryOrange} 0%, ${colors.secondaryPurple} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      backgroundSize: '200% 200%',
      animation: 'gradient-shift 8s ease infinite',
    } : {}

    const combinedStyle = {
      ...textStyle,
      ...gradientStyle,
      ...style,
    }

    // Determine the HTML element to render
    let Component: keyof JSX.IntrinsicElements = 'span'
    
    if (as) {
      Component = as
    } else {
      // Auto-select appropriate HTML element based on variant
      const elementMap: Record<string, keyof JSX.IntrinsicElements> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        bodyLarge: 'p',
        body: 'p',
        bodySmall: 'p',
        caption: 'span',
        overline: 'span',
        link: 'a',
      }
      Component = elementMap[variant] || 'span'
    }

    return React.createElement(
      Component,
      {
        ref,
        style: combinedStyle,
        className: `enhanced-text enhanced-text-${variant} ${className}`.trim(),
        ...props,
      },
      children
    )
  }
)

EnhancedText.displayName = 'EnhancedText'