import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import { THEME } from "../styles/constants"

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>DevCard</Text>
          <Text style={styles.subtitle}>
            Seu cartão de visita digital de dev mobile
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.push("/cadastro")}
        >
          <Text style={styles.buttonText}>Criar meu cartão</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 40,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    color: THEME.colors.primary,
    fontWeight: "bold",
    fontSize: 56,
  },
  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 16,
    width: 200,
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
  },
  buttonText: {
    color: THEME.colors.primary_foreground,
    fontWeight: "500",
    fontSize: 18,
  },
})