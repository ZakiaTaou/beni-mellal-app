import { ChevronUp } from "lucide-react-native";
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";
export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View>
          <Text style={styles.title}>Discover the Magic of Beni Mellal</Text>
          <Text style={styles.subtitle}>
            Explore nature, history, and adventure
          </Text>
        </View>
        <View>
          <View style={styles.btnContainer}>
            <ChevronUp color="#fff" size={48} />
            <Pressable style={styles.btn}>
              <Text style={styles.txt}>Go</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
  },
  overlay: {
    alignItems: "center",
    marginTop: 100,
    gap: 400,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#443818",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: "#443818",
    textAlign: "center",
    marginBottom: 30,
  },
  btnContainer: {
    width: 100,
    height: 200,
    backgroundColor: "rgba(68, 56, 24, 0.8)",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 100,
    paddingBottom: 10,
    gap:45
  },
  btn: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#443818",
  },
});
