import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroScreen from "./screens/Cadastro/CadastroScreen";
import EscalacaoScreen from "./screens/Escalacao/EscalacaoScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/Login/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          contentStyle: { backgroundColor: "#080808" },
          headerStyle: { backgroundColor: "#080808" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { color: "#ffffff", fontWeight: "700" },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Fiel Corinthians", headerBackVisible: false }}
        />
        <Stack.Screen
          name="Escalacao"
          component={EscalacaoScreen}
          options={{ title: "Escalação" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
