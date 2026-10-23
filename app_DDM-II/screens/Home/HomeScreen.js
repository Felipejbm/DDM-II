import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";

import { AuthLink, PrimaryButton } from "../../components/AuthActions";
import { styles } from "./style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.brand}>VAI, CORINTHIANS! 🖤🤍</Text>
        <Text style={styles.title}>Aqui é Corinthians!</Text>
        <Text style={styles.description}>
          Acompanhe tudo sobre o Timão em um só lugar, com informações,
          novidades e funcionalidades para você ficar sempre conectado com o
          Corinthians.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>⚽</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Acompanhe os jogos</Text>
            <Text style={styles.cardText}>
              Confira partidas, resultados, próximos confrontos e informações
              importantes sobre os jogos do Timão.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>🏆</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Títulos e conquistas</Text>
            <Text style={styles.cardText}>
              Reviva grandes momentos da história do Corinthians e acompanhe
              suas principais conquistas.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>📰</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Notícias do Timão</Text>
            <Text style={styles.cardText}>
              Fique por dentro das principais novidades e acontecimentos
              relacionados ao Corinthians.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>🖤</Text>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Fiel Torcida</Text>
            <Text style={styles.cardText}>
              Um espaço pensado para aproximar os torcedores e celebrar a
              paixão pelo Corinthians.
            </Text>
          </View>
        </View>

        <PrimaryButton
          title="Ver escalação"
          onPress={() => navigation.navigate("Escalacao")}
        />
        <AuthLink onPress={() => navigation.replace("Login")}>
          Sair da conta
        </AuthLink>
      </ScrollView>
    </View>
  );
}
