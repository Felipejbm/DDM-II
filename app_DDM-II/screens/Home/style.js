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
  card: {
    alignItems: "flex-start",
    backgroundColor: "#151515",
    borderColor: "#292929",
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 14,
    padding: 18,
  },
  cardIcon: {
    fontSize: 30,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 7,
  },
  cardText: {
    color: "#a3a3a3",
    fontSize: 14,
    lineHeight: 21,
  },
});
