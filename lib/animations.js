// Centralized Animation System
export const animations = {
  // Timing Functions
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  
  // Duration
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
  },
  
  // Common transitions
  transition: {
    all: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Hover effects
  hover: {
    scale: 'transform: scale(1.05)',
    scaleSmall: 'transform: scale(1.02)',
    lift: 'transform: translateY(-2px)',
    liftLarge: 'transform: translateY(-4px)',
  },
  
  // Card animations
  card: {
    hover: {
      transform: 'translateY(-4px) scale(1.02)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    press: {
      transform: 'translateY(0px) scale(0.98)',
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },
  
  // Button animations
  button: {
    hover: {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    press: {
      transform: 'translateY(0px)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },
  
  // Fade animations
  fadeIn: {
    opacity: '0',
    animation: 'fadeIn 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
  },
  
  // Slide animations
  slideInUp: {
    transform: 'translateY(20px)',
    opacity: '0',
    animation: 'slideInUp 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
  },
  
  slideInLeft: {
    transform: 'translateX(-20px)',
    opacity: '0',
    animation: 'slideInLeft 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
  },
  
  slideInRight: {
    transform: 'translateX(20px)',
    opacity: '0',
    animation: 'slideInRight 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
  }
}

// CSS Keyframes (to be added to global CSS)
export const keyframes = `
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideInUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInLeft {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInRight {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`