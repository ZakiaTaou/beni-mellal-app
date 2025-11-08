import { router, useLocalSearchParams } from "expo-router";
import { MoveLeft } from "lucide-react-native";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAttractionsStore } from "../../store/attractionsStore";

const { width } = Dimensions.get("window");

export default function Gallery() {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useLocalSearchParams(); 
  const { attractions } = useAttractionsStore();
  const attraction = attractions.find((a) => a.id.toString() === id);
  const images= attraction.images;



  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MoveLeft size={28} color="#443818" />
      </TouchableOpacity>

      <Text style={styles.title}>Cascades d'Ouzoud</Text>
      <Text style={styles.counter}>{`${activeIndex + 1}/${
        images.length
      }`}</Text>
       <Image
        source={{ uri: attraction.thumbnail }}
        style={styles.background}
      />
        
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />


      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf0",
    alignItems: "center",
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 45,
    left: 15,
    backgroundColor: "rgba(68,56,24,0.1)",
    padding: 6,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#443818",
    marginTop: 30,
  },
  counter: {
    paddingTop: 5,
    fontSize: 20,
    color: "#443818",
  },
  background: {
    position: "absolute",
    width:width,
    height:500,
    top:250,
    opacity:0.6
  },
  imageWrapper: {
    zIndex:1000,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 600,
    borderRadius: 25,
    resizeMode: "cover",
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 50,
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 51,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#443818",
    width: 15,
    height: 15,
  },
});
