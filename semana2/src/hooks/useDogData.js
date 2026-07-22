import { useEffect, useState } from "react";

const useDogData = () => {
  const [dogData, setDogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cantidadDogs, setCantidadDogs] = useState(6);

  // Extrae el nombre de la raza desde el path de la URL de la imagen
  const getBreedFromUrl = (url) => {
    const parts = url.split("/");
    const breedIndex = parts.indexOf("breeds");
    if (breedIndex !== -1 && parts[breedIndex + 1]) {
      const rawBreed = parts[breedIndex + 1];
      return rawBreed.replace("-", " ").toUpperCase();
    }
    return "Raza Desconocida";
  };

  const fetchDogData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dog.ceo/api/breeds/image/random/${cantidadDogs}`
      );
      const data = await response.json();

      if (data.status === "success") {
        const formattedDogs = data.message.map((imageUrl, index) => ({
          id: `${index}-${Date.now()}`,
          image: imageUrl,
          breed: getBreedFromUrl(imageUrl),
        }));
        setDogData(formattedDogs);
      }
    } catch (error) {
      console.error("Error fetching Dog data:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreDogs = () => {
    setCantidadDogs((prev) => prev + 4);
  };

  useEffect(() => {
    fetchDogData();
  }, [cantidadDogs]);

  return { dogData, loading, loadMoreDogs };
};

export default useDogData;