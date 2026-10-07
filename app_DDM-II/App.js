import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { styles } from "./style";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Vai, Corinthians! 🖤🤍</Text>

        <Text style={styles.subtitle}>
          Aqui é Corinthians!
        </Text>

        <Text style={styles.text}>
          Bem-vindo ao nosso aplicativo! Acompanhe tudo sobre o Timão em um
          só lugar, com informações, novidades e funcionalidades para você
          ficar sempre conectado com o Corinthians.
        </Text>

        <View style={styles.card}>
          <Text style={styles.icon}>⚽</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Acompanhe os jogos</Text>

            <Text style={styles.cardText}>
              Confira partidas, resultados, próximos confrontos e informações
              importantes sobre os jogos do Timão.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>🏆</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Títulos e conquistas</Text>

            <Text style={styles.cardText}>
              Reviva grandes momentos da história do Corinthians e acompanhe
              suas principais conquistas.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>📰</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Notícias do Timão</Text>

            <Text style={styles.cardText}>
              Fique por dentro das principais novidades, atualizações e
              acontecimentos relacionados ao Corinthians.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>🖤</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Fiel Torcida</Text>

            <Text style={styles.cardText}>
              Um espaço pensado para aproximar os torcedores e celebrar a
              paixão pelo Corinthians.
            </Text>
          </View>
        </View>

        <Text style={styles.inputLabel}>
          Deixe uma mensagem para o Timão:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Vai Curintia!"
          placeholderTextColor="#777"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Vai, Corinthians! 🖤🤍")}
        >
          <Text style={styles.buttonText}>Entrar no app</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
