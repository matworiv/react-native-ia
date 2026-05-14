import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import { useState } from "react"
import { FormInput } from "../components/FormInput"
import { ButtonGroupColors, GroupItem } from "../components/ButtonGroupColors"
import { Button } from "../components/Button"
import { THEME } from "../styles/constants"

type FormData = {
  fullName: string
  role: string
  company: string
  years: string
  technology: string
  cardColor: string
}

type FormErrors = {
  fullName?: string
  role?: string
  years?: string
  technology?: string
  cardColor?: string
}

const COLOR_GROUP: GroupItem[] = [
  { id: "1", name: "Azul", colorCode: "#3b82f6" },
  { id: "2", name: "Verde", colorCode: "#22c55e" },
  { id: "3", name: "Roxo", colorCode: THEME.colors.primary },
  { id: "4", name: "Rose", colorCode: "#970957" },
]
export default function CadastroScreen() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    role: "",
    company: "",
    years: "",
    technology: "",
    cardColor: "",
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  function handleInputChange(name: keyof FormData, text: string) {
    setFormData((currentForm) => ({
      ...currentForm,
      [name]: text,
    }))
  }

  function handleSetError(name: keyof FormErrors, error: string) {
    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [name]: error,
    }))
  }

  function handleRemoveError(name: keyof FormErrors) {
    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }))
  }

  function validate(): boolean {
    let valid = true

    if (formData.fullName.length === 0) {
      handleSetError("fullName", "Informe o nome completo")
      valid = false
    } else if (formData.fullName.length < 3) {
      handleSetError("fullName", "Nome deve ter pelo menos 3 caracteres")
      valid = false
    } else {
      handleRemoveError("fullName")
    }

    if (formData.role.length === 0) {
      handleSetError("role", "Informe o cargo")
      valid = false
    } else {
      handleRemoveError("role")
    }

    if (formData.years.length === 0 || Number(formData.years) < 1) {
      handleSetError("years", "Você deve ter pelo menos um ano de experiência")
      valid = false
    } else {
      handleRemoveError("years")
    }

    if (formData.technology.length === 0) {
      handleSetError("technology", "Informe a sua tecnologia favorita")
      valid = false
    } else {
      handleRemoveError("technology")
    }

    if (formData.cardColor.length === 0) {
      handleSetError("cardColor", "Selecione pelo menos uma cor")
      valid = false
    } else {
      handleRemoveError("cardColor")
    }

    return valid
  }

  function handleGerarCartao() {
    const isValid = validate()
    if (!isValid) return

    router.push({
      pathname: "/preview",
      params: {
        nome: formData.fullName,
        cargo: formData.role,
        empresa: formData.company,
        anos: formData.years,
        tecnologia: formData.technology,
        cor: formData.cardColor,
      },
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subtitle}>Preencha seus dados de dev</Text>
        </View>

        <View style={styles.form}>
          <FormInput
            label="Nome completo"
            placeholder="João Andrade"
            value={formData.fullName}
            onChangeText={(text) => handleInputChange("fullName", text)}
            errorMessage={formErrors.fullName}
          />

          <FormInput
            label="Cargo"
            placeholder="Engenheiro de Machine Learning"
            value={formData.role}
            onChangeText={(text) => handleInputChange("role", text)}
            errorMessage={formErrors.role}
          />

          <FormInput
            label="Empresa (opcional)"
            placeholder="Tech Solutions"
            value={formData.company}
            onChangeText={(text) => handleInputChange("company", text)}
          />

          <FormInput
            label="Anos de experiência"
            placeholder="4"
            value={formData.years}
            onChangeText={(text) => handleInputChange("years", text)}
            keyboardType="numeric"
            errorMessage={formErrors.years}
          />

          <FormInput
            label="Tecnologia favorita"
            placeholder="React Native"
            value={formData.technology}
            onChangeText={(text) => handleInputChange("technology", text)}
            errorMessage={formErrors.technology}
          />

          <View style={styles.colorSection}>
            <Text style={styles.colorLabel}>Cor do cartão</Text>
            <ButtonGroupColors
              group={COLOR_GROUP}
              selected={formData.cardColor}
              onSelect={(colorCode) => handleInputChange("cardColor", colorCode)}
            />
            {formErrors.cardColor && (
              <Text style={styles.errorText}>{formErrors.cardColor}</Text>
            )}
          </View>
        </View>

        <Button title="Gerar Cartão" onPress={handleGerarCartao} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 24,
  },
  headerContainer: {
    gap: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: THEME.colors.subtitle,
  },
  form: {
    gap: 16,
  },
  colorSection: {
    gap: 8,
  },
  colorLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  errorText: {
    fontSize: 12,
    color: "#e53e3e",
  },
})
