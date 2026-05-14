import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"
import { THEME } from "../../styles/constants"

type Props = TextInputProps & {
  label: string
  errorMessage?: string
}

export function FormInput({ label, errorMessage, ...props }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholderTextColor="#aaa" {...props} />
      {errorMessage && errorMessage !== "" && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: THEME.border.radius.md,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 12,
    color: "#e53e3e",
  },
})
