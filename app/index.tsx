import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>

                <View style={styles.headerContainer}>
                    <Text style={styles.logo}>DevCard</Text>

                    <Text style={styles.subtitle}>
                        Seu cartão de visita digital de dev mobile
                    </Text>
                </View>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Criar meu cartão
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {},
    headerContainer: {},
    logo: {},
    subtitle: {},
    buttonContainer: {},
    buttonText: {},
})