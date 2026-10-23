import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";

import { styles } from "./style";

const lineup = [
  { number: "1", name: "Hugo Souza", position: "GOL" },
  { number: "2", name: "Matheuzinho", position: "LD" },
  { number: "3", name: "André Ramalho", position: "ZAG" },
  { number: "4", name: "Gustavo Henrique", position: "ZAG" },
  { number: "6", name: "Matheus Bidu", position: "LE" },
  { number: "8", name: "Raniele", position: "VOL" },
  { number: "7", name: "Breno Bidon", position: "MEI" },
  { number: "10", name: "Rodrigo Garro", position: "MEI" },
  { number: "11", name: "Romero", position: "ATA" },
  { number: "9", name: "Yuri Alberto", position: "ATA" },
  { number: "7", name: "Memphis Depay", position: "ATA" },
];

export default function EscalacaoScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.brand}>TIME TITULAR</Text>
        <Text style={styles.title}>Escalação</Text>
        <Text style={styles.description}>Formação demonstrativa · 4-3-3</Text>
        <View style={styles.lineupNotice}>
          <Text style={styles.lineupNoticeText}>
            Escalação ilustrativa. Os jogadores podem mudar conforme cada
            partida.
          </Text>
        </View>

        {lineup.map((player) => (
          <View
            key={`${player.number}-${player.position}`}
            style={styles.playerRow}
          >
            <View style={styles.playerNumber}>
              <Text style={styles.playerNumberText}>{player.number}</Text>
            </View>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerPosition}>{player.position}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
