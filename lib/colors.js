// Centralized Color Management System
export const colors = {
  // Primary Brand Colors
  primaryOrange: '#FF6B00',
  primaryOrangeHover: '#E55A00',
  primaryOrangeDark: '#CC5500',
  primaryOrangeLight: '#FF8533',
  
  // Secondary Brand Colors
  secondaryBlue: '#2563EB',
  secondaryBlueHover: '#1D4ED8',
  secondaryPurple: '#7C3AED',
  secondaryPurpleHover: '#6D28D9',
  
  // Background Colors
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F8FAFC',
  backgroundTertiary: '#F1F5F9',
  backgroundDark: '#0F172A',
  backgroundDarkSecondary: '#1E293B',
  
  // Text Colors
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textTertiary: '#64748B',
  textMuted: '#94A3B8',
  textHeading: '#1E293B',
  textLight: '#FFFFFF',
  
  // Button Colors
  buttonPrimaryBg: '#FF6B00',
  buttonPrimaryText: '#FFFFFF',
  buttonPrimaryHover: '#E55A00',
  buttonSecondaryBg: '#FFFFFF',
  buttonSecondaryText: '#FF6B00',
  buttonSecondaryBorder: '#FF6B00',
  buttonSecondaryHover: '#FFF7ED',
  buttonGhostHover: '#F1F5F9',
  
  // Input Colors
  inputBackground: '#FFFFFF',
  inputBorder: '#D1D5DB',
  inputBorderFocus: '#FF6B00',
  inputBorderError: '#EF4444',
  inputText: '#111827',
  inputPlaceholder: '#9CA3AF',
  
  // Card Colors
  cardBackground: '#FFFFFF',
  cardBackgroundHover: '#FAFAFA',
  cardBorder: '#E2E8F0',
  cardBorderHover: '#CBD5E1',
  cardShadow: 'rgba(0, 0, 0, 0.1)',
  cardShadowHover: 'rgba(0, 0, 0, 0.15)',
  
  // Link Colors
  linkDefault: '#FF6B00',
  linkHover: '#E55A00',
  linkVisited: '#7C3AED',
  
  // Status Colors
  success: '#10B981',
  successLight: '#D1FAE5',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  error: '#EF4444',
  errorLight: '#FEE2E2',
  info: '#3B82F6',
  infoLight: '#DBEAFE',
  
  // Border Colors
  borderPrimary: '#E2E8F0',
  borderSecondary: '#CBD5E1',
  borderAccent: '#FF6B00',
  
  // Gradient Colors
  gradientPrimary: 'linear-gradient(135deg, #FF6B00 0%, #E55A00 100%)',
  gradientSecondary: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
  gradientCard: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
  
  // Dark Mode Colors
  dark: {
    backgroundPrimary: '#0F172A',
    backgroundSecondary: '#1E293B',
    backgroundTertiary: '#334155',
    textPrimary: '#F1F5F9',
    textSecondary: '#CBD5E1',
    textTertiary: '#94A3B8',
    cardBackground: '#1E293B',
    cardBorder: '#334155',
    borderPrimary: '#334155',
    borderSecondary: '#475569',
  }
}

// Export individual color categories for easier imports
export const brandColors = {
  primary: colors.primaryOrange,
  primaryHover: colors.primaryOrangeHover,
  secondary: colors.secondaryBlue,
  secondaryHover: colors.secondaryBlueHover,
}

export const textColors = {
  primary: colors.textPrimary,
  secondary: colors.textSecondary,
  tertiary: colors.textTertiary,
  muted: colors.textMuted,
  heading: colors.textHeading,
}

export const backgroundColors = {
  primary: colors.backgroundPrimary,
  secondary: colors.backgroundSecondary,
  tertiary: colors.backgroundTertiary,
}

export const buttonColors = {
  primary: {
    bg: colors.buttonPrimaryBg,
    text: colors.buttonPrimaryText,
    hover: colors.buttonPrimaryHover,
  },
  secondary: {
    bg: colors.buttonSecondaryBg,
    text: colors.buttonSecondaryText,
    border: colors.buttonSecondaryBorder,
    hover: colors.buttonSecondaryHover,
  }
}