import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TextInput, View } from "react-native";

import { AuthLink, PrimaryButton } from "../../components/AuthActions";
import { styles } from "./style";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.authContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.logo}>⚽</Text>
        <Text style={styles.brand}>FIEL</Text>
        <Text style={styles.title}>Bem-vindo de volta</Text>
        <Text style={styles.description}>
          Entre para acompanhar tudo sobre o Timão.
        </Text>

        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          accessibilityLabel="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="seu@email.com"
          placeholderTextColor="#777777"
          style={styles.input}
        />
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          accessibilityLabel="Senha"
          autoCapitalize="none"
          placeholder="Sua senha"
          placeholderTextColor="#777777"
          secureTextEntry
          style={styles.input}
        />

        <PrimaryButton
          title="Entrar"
          onPress={() => navigation.replace("Home")}
        />
        <AuthLink onPress={() => navigation.navigate("Cadastro")}>
          Ainda não tem conta? Cadastre-se
        </AuthLink>
      </ScrollView>
    </View>
  );
}
