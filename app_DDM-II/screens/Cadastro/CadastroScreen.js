import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TextInput, View } from "react-native";

import { AuthLink, PrimaryButton } from "../../components/AuthActions";
import { styles } from "./style";

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.authContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.logo}>⚽</Text>
        <Text style={styles.brand}>JUNTE-SE À FIEL</Text>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.description}>
          Faça parte da torcida e fique por dentro do Corinthians.
        </Text>

        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput
          accessibilityLabel="Nome"
          autoCapitalize="words"
          placeholder="Seu nome"
          placeholderTextColor="#777777"
          style={styles.input}
        />
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
          placeholder="Crie uma senha"
          placeholderTextColor="#777777"
          secureTextEntry
          style={styles.input}
        />

        <PrimaryButton
          title="Criar conta"
          onPress={() => navigation.replace("Home")}
        />
        <AuthLink onPress={() => navigation.navigate("Login")}>
          Já tem uma conta? Entrar
        </AuthLink>
      </ScrollView>
    </View>
  );
}
