import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button
        title="Ir al detalle"
        onPress={() => navigation.navigate("Detalle", { id: 3 })}
      />
    </View>
  );
}