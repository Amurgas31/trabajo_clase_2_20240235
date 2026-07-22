import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/pokemonStyle";

const DogCard = ({ dog }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: dog.image }} style={styles.image} />
      </View>
      <Text style={styles.cardTitle}>{dog.breed}</Text>
      <Text style={styles.number}>Perrito</Text>
    </View>
  );
};

export default DogCard;