import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router, useLocalSearchParams } from "expo-router"
import { Button } from "../components/Button"
import { THEME } from "../styles/constants"

type Params = {
  nome: string
  cargo: string
  empresa: string
  anos: string
  tecnologia: string
  cor: string
}

function getBadge(anos: number): { label: string; color: string } {
  if (anos >= 6) {
    return { label: "Sênior", color: "#f59e0b" }
  } else if (anos >= 3) {
    return { label: "Pleno", color: "#3b82f6" }
  } else {
    return { label: "Júnior", color: "#9ca3af" }
  }
}

export default function PreviewScreen() {
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams<Params>()

  const badge = getBadge(Number(anos))
  const avatarLetter = nome ? nome.charAt(0).toUpperCase() : "?"

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Seu Cartão</Text>

        <View style={[styles.card, { backgroundColor: cor }]}>
          <View style={styles.avatarOuterContainer}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>{avatarLetter}</Text>
            </View>
          </View>

          <Text style={styles.cardName}>{nome}</Text>
          <Text style={styles.cardRole}>{cargo}</Text>
          {empresa ? <Text style={styles.cardCompany}>{empresa}</Text> : null}

          <View style={styles.separator} />

          <Text style={styles.cardSpecialistLabel}>Especialista em</Text>
          <Text style={styles.cardTechnology}>{tecnologia}</Text>

          <View style={[styles.badge, { backgroundColor: badge.color }]}>
            <Text style={styles.badgeText}>{badge.label}</Text>
          </View>

          <Text style={styles.cardYears}>{anos} anos de experiência</Text>
        </View>

        <View style={styles.footer}>
          <Button
            title="Editar dados"
            variant="outline"
            onPress={() => router.back()}
          />
          <Button
            title="Finalizar"
            onPress={() => router.replace("/sucesso")}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
  },
  card: {
    borderRadius: THEME.border.radius.xl,
    paddingHorizontal: 28,
    paddingVertical: 32,
    alignItems: "center",
    gap: 8,
  },
  avatarOuterContainer: {
    padding: 4,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  cardName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 4,
  },
  cardRole: {
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
  },
  cardCompany: {
    fontSize: 13,
    color: "rgba(255,255,255,0.7)",
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
    width: "80%",
    marginVertical: 4,
  },
  cardSpecialistLabel: {
    fontSize: 13,
    color: "rgba(255,255,255,0.7)",
  },
  cardTechnology: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 100,
    marginTop: 4,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  cardYears: {
    fontSize: 12,
    color: "rgba(255,255,255,0.7)",
    marginTop: 4,
  },
  footer: {
    gap: 12,
  },
})
