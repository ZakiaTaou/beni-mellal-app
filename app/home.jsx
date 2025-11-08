import { router } from "expo-router";
import { useEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useAttractionsStore } from "../store/attractionsStore";

export default function HomeScreen() {
  const { attractions, getAttractions } = useAttractionsStore();

  useEffect(() => {
    getAttractions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Beni Mellal</Text>

      <FlatList
        data={attractions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`details/${item.id}`)}
            style={styles.card}
          >
            <Image source={{ uri: item.thumbnail }} style={styles.image} />
            <View style={styles.infoBox}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.shortDescription}</Text>
            </View>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf0",
    paddingTop: 40,
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#443818",
    marginVertical: 30,
  },
  card: {
    width: 370,
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
    shadowColor: "#f3ba1fff",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  infoBox: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#443818",
  },
  description: {
    fontSize: 13,
    color: "#443818",
  },
});
