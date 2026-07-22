import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import PokemonCard from "../components/PokemonCard";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import usePokemonData from "../hooks/usePokemonData";
import { styles } from "../styles/pokemonStyle";

const PokemonScreen = ({ navigation }) => {
  const { pokemonData, loading, loadMorePokemon } = usePokemonData();
  const [search, setSearch] = useState("");

  const filteredPokemon = pokemonData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokémon API</Text>

      <CustomInput
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar Pokémon por nombre..."
      />

      {loading ? (
        <Text style={styles.loadingText}>Cargando Pokémon...</Text>
      ) : (
        <FlatList
          data={filteredPokemon}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.text}>No se encontraron Pokémon.</Text>
          }
        />
      )}

      <CustomButton
        title="Cargar más Pokémon"
        onPress={loadMorePokemon}
      />

      <CustomButton
        title="Ver API Extra"
        onPress={() => navigation.navigate("Dogs")}
      />
    </SafeAreaView>
  );
};

export default PokemonScreen;