import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import { THEME } from "../styles/constants"

export default function SucessoScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={styles.container}>
        <View style={styles.iconOuterContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>✓</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Cartão criado{"\n"}com sucesso!</Text>
          <Text style={styles.subtitle}>
            Seu cartão de visita digital está pronto. Compartilhe com a galera!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Criar outro cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/")}>
          <Text style={styles.linkText}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 24,
  },
  iconOuterContainer: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "rgba(34, 197, 94, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#22c55e",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: THEME.colors.subtitle,
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: THEME.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: THEME.border.radius.md,
    width: "100%",
  },
  buttonText: {
    color: THEME.colors.primary_foreground,
    fontWeight: "500",
    fontSize: 18,
  },
  linkText: {
    color: THEME.colors.primary,
    fontSize: 14,
    fontWeight: "500",
  },
})
