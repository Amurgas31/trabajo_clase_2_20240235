import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  // Contenedor principal de pantallas
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  text: {
    fontSize: 14,
    marginBottom: 15,
    color: "#555",
    lineHeight: 20,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#3B4CCA",
  },

  // CustomInput
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
  },

  // CustomButton
  button: {
    backgroundColor: "#FFCB05",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#3B4CCA",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  // PokemonCard
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
    textTransform: "capitalize",
  },
  number: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginTop: 5,
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});