import { router, useLocalSearchParams } from "expo-router";
import {
  Binoculars,
  CalendarCheck,
  ChartBarStacked,
  Heart,
  Images,
  MoveLeft,
} from "lucide-react-native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Details() {
  const { image } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={image} style={styles.image} />
      <TouchableOpacity onPress={() => router.back()} style={styles.iconBack}>
        <MoveLeft size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Heart size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.galleryButton}
          onPress={() =>
            router.push({
              pathname: "/details/gallery",
              params: { image: image },
            })
          }
        >
          <Images size={30} color="#fff" />
          <Text style={styles.galleryText}>View Gallery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          {" "}
          Les cascades d’Ouzoud sont parmi les plus hautes et les plus
          spectaculaires du Maroc, avec une chute d’eau de 110 mètres. Situées à
          environ 150 km au nord-est de Marrakech, elles offrent un paysage
          naturel époustouflant avec des singes magots vivant librement dans la
          région.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Information</Text>

        <View style={styles.infoRow}>
          <ChartBarStacked size={30} color="#443818" />
          <View>
            <Text style={styles.infoTitle}>Type</Text>
            <Text style={styles.infoValue}>Natural Landmark</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <CalendarCheck size={30} color="#443818" />
          <View>
            <Text style={styles.infoTitle}>Best Time to Visit</Text>
            <Text style={styles.infoValue}>March to May</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Binoculars size={30} color="#443818" />
          <View>
            <Text style={styles.infoTitle}>Activities</Text>
            <Text style={styles.infoValue}>
              Hiking, boat trip, wildlife viewing
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf0",
  },
  image: {
    width: "100%",
    height: 350,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  iconBack: {
    position: "absolute",
    top: 50,
    left: 15,
    width: 40,
    height: 40,
    backgroundColor: "rgba(68,56,24,0.5)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginVertical: 10,
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: "#443818",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  galleryButton: {
    width: 320,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#443818",
    borderRadius: 25,
    gap: 5,
  },
  galleryText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
  section: {
    marginTop: 25,
    marginHorizontal: 25,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#443818",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 500,
    color: "#333",
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 15,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#443818",
  },
  infoValue: {
    fontSize: 15,
    color: "#443818",
  },
});
