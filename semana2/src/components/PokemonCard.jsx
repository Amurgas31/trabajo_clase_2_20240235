import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../styles/pokemonStyle";

const PokemonCard = ({ pokemon }) => {
  const pokemonNumber = pokemon.url.split("/").filter(Boolean).pop();

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
      <Text style={styles.number}>#{pokemonNumber}</Text>
      <Text style={styles.cardTitle}>{pokemon.name}</Text>
      {pokemon.description && (
        <Text style={styles.cardText}>{pokemon.description}</Text>
      )}
    </View>
  );
};

export default PokemonCard;