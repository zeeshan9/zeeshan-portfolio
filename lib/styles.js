// Centralized Style Utilities
import { colors } from './colors'
import { typography, textStyles } from './typography'
import { animations } from './animations'

// Style generator functions
export const createButtonStyle = (variant = 'primary', size = 'medium') => {
  const baseStyle = {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: animations.transition.all,
    textDecoration: 'none',
  }

  const variants = {
    primary: {
      backgroundColor: colors.buttonPrimaryBg,
      color: colors.buttonPrimaryText,
      '&:hover': {
        backgroundColor: colors.buttonPrimaryHover,
        transform: 'translateY(-1px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      '&:active': {
        transform: 'translateY(0)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
    secondary: {
      backgroundColor: colors.buttonSecondaryBg,
      color: colors.buttonSecondaryText,
      border: `1px solid ${colors.buttonSecondaryBorder}`,
      '&:hover': {
        backgroundColor: colors.buttonSecondaryHover,
        transform: 'translateY(-1px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.textSecondary,
      '&:hover': {
        backgroundColor: colors.buttonGhostHover,
        color: colors.textPrimary,
      }
    }
  }

  const sizes = {
    small: {
      padding: '0.5rem 1rem',
      fontSize: typography.fontSize.sm,
    },
    medium: {
      padding: '0.75rem 1.5rem',
      fontSize: typography.fontSize.sm,
    },
    large: {
      padding: '1rem 2rem',
      fontSize: typography.fontSize.base,
    }
  }

  return {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
  }
}

export const createCardStyle = (variant = 'default') => {
  const baseStyle = {
    backgroundColor: colors.cardBackground,
    border: `1px solid ${colors.cardBorder}`,
    borderRadius: '0.75rem',
    padding: '1.5rem',
    transition: animations.transition.all,
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  }

  const variants = {
    default: {
      '&:hover': {
        backgroundColor: colors.cardBackgroundHover,
        borderColor: colors.cardBorderHover,
        transform: 'translateY(-4px) scale(1.02)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
    elevated: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '&:hover': {
        backgroundColor: colors.cardBackgroundHover,
        borderColor: colors.cardBorderHover,
        transform: 'translateY(-8px) scale(1.03)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }
  }

  return {
    ...baseStyle,
    ...variants[variant],
  }
}

export const createTextStyle = (variant = 'body') => {
  return textStyles[variant] || textStyles.body
}

export const createLinkStyle = () => {
  return {
    color: colors.linkDefault,
    textDecoration: 'none',
    fontWeight: typography.fontWeight.medium,
    transition: animations.transition.colors,
    position: 'relative',
    '&:hover': {
      color: colors.linkHover,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-2px',
      left: '0',
      backgroundColor: colors.linkDefault,
      transition: 'width 300ms ease',
    },
    '&:hover::after': {
      width: '100%',
    }
  }
}

// Animation utilities
export const fadeInAnimation = (delay = 0) => ({
  opacity: 0,
  animation: `fadeIn 500ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms forwards`,
})

export const slideInUpAnimation = (delay = 0) => ({
  transform: 'translateY(20px)',
  opacity: 0,
  animation: `slideInUp 500ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms forwards`,
})

export const slideInLeftAnimation = (delay = 0) => ({
  transform: 'translateX(-20px)',
  opacity: 0,
  animation: `slideInLeft 500ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms forwards`,
})

export const slideInRightAnimation = (delay = 0) => ({
  transform: 'translateX(20px)',
  opacity: 0,
  animation: `slideInRight 500ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms forwards`,
})

// Responsive utilities
export const responsive = {
  mobile: '@media (max-width: 640px)',
  tablet: '@media (max-width: 768px)',
  desktop: '@media (min-width: 1024px)',
  largeDesktop: '@media (min-width: 1280px)',
}

// Theme utilities
export const getThemeColors = (isDark = false) => {
  if (isDark) {
    return {
      background: colors.dark.backgroundPrimary,
      backgroundSecondary: colors.dark.backgroundSecondary,
      text: colors.dark.textPrimary,
      textSecondary: colors.dark.textSecondary,
      card: colors.dark.cardBackground,
      border: colors.dark.borderPrimary,
    }
  }
  return {
    background: colors.backgroundPrimary,
    backgroundSecondary: colors.backgroundSecondary,
    text: colors.textPrimary,
    textSecondary: colors.textSecondary,
    card: colors.cardBackground,
    border: colors.borderPrimary,
  }
}

// Export all style utilities
export {
  colors,
  typography,
  textStyles,
  animations,
}