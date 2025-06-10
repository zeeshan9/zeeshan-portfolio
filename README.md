# Zeeshan Mushtaq - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a centralized design system.

## Features

- 🎨 Modern and responsive design with centralized styling system
- 🌙 Dark/Light mode support
- ⚡ Fast performance with Next.js
- 📱 Mobile-friendly layout
- 🎭 Enhanced animations and micro-interactions
- 🔍 SEO optimized
- 🎯 Centralized color and typography management
- ✨ Reusable enhanced components

## Design System

This project features a comprehensive design system with:

### Centralized Color Management (`lib/colors.js`)
- Semantic color naming
- Brand colors, backgrounds, text colors, and status colors
- Dark mode support
- Easy theme switching

### Typography System (`lib/typography.js`)
- Consistent font families and sizes
- Predefined text styles for headings, body text, and special elements
- Responsive typography

### Animation System (`lib/animations.js`)
- Smooth transitions and hover effects
- Card animations, button interactions
- Scroll-triggered animations
- Customizable easing functions

### Enhanced Components
- `EnhancedButton` - Consistent button styling with hover effects
- `EnhancedCard` - Card component with multiple variants and animations
- `EnhancedText` - Typography component with gradient text support

## Usage

### Using Colors
```javascript
import { colors, brandColors } from '@/lib/colors'

// Use in components
style={{ backgroundColor: colors.primaryOrange }}

// Or use semantic colors
style={{ backgroundColor: brandColors.primary }}
```

### Using Typography
```javascript
import { textStyles } from '@/lib/typography'

// Apply text styles
style={textStyles.h1}
```

### Using Enhanced Components
```jsx
import { EnhancedButton, EnhancedCard, EnhancedText } from '@/components/ui'

<EnhancedButton variant="primary" size="lg">
  Click me
</EnhancedButton>

<EnhancedCard variant="elevated" hover>
  Card content
</EnhancedCard>

<EnhancedText variant="h1" gradient>
  Gradient heading
</EnhancedText>
```

### Using Animations
```javascript
import { useScrollAnimation, useHoverAnimation } from '@/hooks/use-enhanced-animations'

const { ref, isVisible } = useScrollAnimation()
const hoverRef = useHoverAnimation()
```

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Shadcn UI
- Custom Design System
- Enhanced Animations
- Lucide Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/zeeshan9/zeeshan-portfolio.git
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Changing Colors
Edit `lib/colors.js` to update colors throughout the entire project:

```javascript
export const colors = {
  primaryOrange: '#YOUR_NEW_COLOR', // This will update everywhere
  // ... other colors
}
```

### Updating Typography
Modify `lib/typography.js` to change fonts and text styles:

```javascript
export const typography = {
  fontFamily: {
    primary: '"Your Font", sans-serif',
    // ... other font settings
  }
}
```

### Adding New Animations
Extend `lib/animations.js` with new animation presets:

```javascript
export const animations = {
  // ... existing animations
  yourNewAnimation: {
    // animation properties
  }
}
```

## Deployment

This project is deployed on Vercel. Any push to the main branch will automatically trigger a deployment.

## Contact

- Email: zeeshanmushtaq76@gmail.com
- LinkedIn: [Zeeshan Mushtaq](https://linkedin.com/in/zeeshanmushtaq76)
- GitHub: [zeeshan9](https://github.com/zeeshan9)
- Phone: +92 303 8707170

## License

MIT