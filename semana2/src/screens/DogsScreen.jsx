import React from "react";
import { View, Text, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import useDogData from "../hooks/useDogData";
import DogCard from "../components/DogCard";
import CustomButton from "../components/CustomButton";
import { styles } from "../styles/pokemonStyle";

const DogsScreen = ({ navigation }) => {
    const { dogData, loading, loadMoreDogs } = useDogData();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>API Extra: Perritos 🐶</Text>
            <Text style={styles.text}>
                Consumiendo imágenes aleatorias de razas de perros desde Dog CEO API mediante GET.
            </Text>

            {loading ? (
                <ActivityIndicator size="large" color="#3B4CCA" style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={dogData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <DogCard dog={item} />}
                    showsVerticalScrollIndicator={false}
                />
            )}

            <CustomButton title="Cargar más Perritos" onPress={loadMoreDogs} />
            <CustomButton title="Regresar a Pokémon" onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

export default DogsScreen;