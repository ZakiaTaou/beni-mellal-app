import { router } from "expo-router";
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

const attractions = [
  {
    id: "1",
    title: "Lac Bin El Ouidane",
    description: "A stunning man-made lake with azure waters",
    image: require("../assets/images/binelouidane.jpg"),
  },
  {
    id: "2",
    title: "Cascades d’Ouzoud",
    description: "Morocco’s most spectacular waterfalls",
    image: require("../assets/images/ouzoud.jpg"),
  },
  {
    id: "3",
    title: "Kasbah Ras El Ain",
    description: "An ancient fortress overlooking the city",
    image: require("../assets/images/kasbah.jpg"),
  },
  {
    id: "4",
    title: "Kasbah Ras El Ain",
    description: "An ancient fortress overlooking the city",
    image: require("../assets/images/binelouidane.jpg"),
  },
  {
    id: "5",
    title: "Kasbah Ras El Ain",
    description: "An ancient fortress overlooking the city",
    image: require("../assets/images/ouzoud.jpg"),
  },
  {
    id: "6",
    title: "Kasbah Ras El Ain",
    description: "An ancient fortress overlooking the city",
    image: require("../assets/images/kasbah.jpg"),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Beni Mellal</Text>
      <FlatList
        data={attractions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
                router.push({
                  pathname: "details/${item.id}",
                  params: { image: item.image},
                })
              }
            style={styles.card}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
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
    shadowOffset: {
      width: 0,
      height: 5,
    },
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
