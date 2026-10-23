import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
  },
  content: {
    padding: 24,
    paddingTop: 36,
    paddingBottom: 48,
  },
  brand: {
    color: "#c7a96b",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#b5b5b5",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },
  lineupNotice: {
    backgroundColor: "#19160f",
    borderColor: "#40351e",
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
    padding: 14,
  },
  lineupNoticeText: {
    color: "#d7c59f",
    fontSize: 13,
    lineHeight: 19,
  },
  playerRow: {
    alignItems: "center",
    backgroundColor: "#151515",
    borderColor: "#292929",
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  playerNumber: {
    alignItems: "center",
    backgroundColor: "#252525",
    borderRadius: 20,
    height: 36,
    justifyContent: "center",
    marginRight: 12,
    width: 36,
  },
  playerNumberText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
  },
  playerName: {
    color: "#ffffff",
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
  },
  playerPosition: {
    color: "#c7a96b",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
  },
});
