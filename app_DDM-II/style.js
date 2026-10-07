import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  content: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  title: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  text: {
    color: "#d4d4d4",
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 28,
  },

  card: {
    backgroundColor: "#151515",
    borderWidth: 1,
    borderColor: "#2d2d2d",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  icon: {
    fontSize: 32,
    marginRight: 16,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  cardText: {
    color: "#a3a3a3",
    fontSize: 14,
    lineHeight: 21,
  },

  inputLabel: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#151515",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 12,
    color: "#ffffff",
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 4,
  },

  buttonText: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "bold",
  },
});
