import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { THEME } from "../../styles/constants"

export type GroupItem = {
  id: string
  name: string
  colorCode: string
}

type Props = {
  group: GroupItem[]
  selected: string
  onSelect: (colorCode: string) => void
}

export function ButtonGroupColors({ group, selected, onSelect }: Props) {
  return (
    <View style={styles.groupContainer}>
      {group.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.button, selected === item.colorCode && styles.buttonSelected]}
          onPress={() => onSelect(item.colorCode)}
        >
          <View style={[styles.colorIndicator, { backgroundColor: item.colorCode }]} />
          <Text style={[styles.buttonText, selected === item.colorCode && styles.buttonTextSelected]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: THEME.border.radius.md,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flex: 1,
  },
  buttonSelected: {
    borderColor: THEME.colors.primary,
    borderWidth: 2,
  },
  colorIndicator: {
    width: 14,
    height: 14,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 14,
    color: "#555",
  },
  buttonTextSelected: {
    fontWeight: "bold",
    color: THEME.colors.primary,
  },
})
