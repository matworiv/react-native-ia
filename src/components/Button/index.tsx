import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { THEME } from "../../styles/constants"

type ButtonVariant = "primary" | "secondary" | "outline"

type Props = TouchableOpacityProps & {
  title: string
  variant?: ButtonVariant
  disabled?: boolean
  onPress?: () => void
}

export function Button({ title, variant = "primary", disabled = false, onPress, ...props }: Props) {
  const handlePress = () => {
    if (disabled) return
    onPress && onPress()
  }

  const containerStyles = [styles[variant].container, disabled && { opacity: 0.5 }]
  const textStyles = styles[variant].text

  return (
    <TouchableOpacity style={containerStyles} onPress={handlePress} {...props}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  )
}

const stylePrimary = {
  container: {
    backgroundColor: THEME.colors.primary,
    flexDirection: "row" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: THEME.border.radius.md,
  },
  text: {
    color: THEME.colors.primary_foreground,
    fontWeight: "500" as const,
    fontSize: 18,
  },
}

const styleSecondary = {
  container: {
    ...stylePrimary.container,
    backgroundColor: "transparent",
  },
  text: {
    ...stylePrimary.text,
    color: THEME.colors.primary,
  },
}

const styleOutline = {
  container: {
    ...stylePrimary.container,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: THEME.colors.primary,
  },
  text: {
    ...stylePrimary.text,
    color: THEME.colors.primary,
  },
}

const styles = {
  primary: stylePrimary,
  secondary: styleSecondary,
  outline: styleOutline,
}
