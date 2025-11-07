import { useRouter } from "expo-router";
import { ChevronUp } from "lucide-react-native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
export default function Welcome() {
  const offset = useSharedValue({ y: 0 });


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value.y }],
  }));
  const router = useRouter()
  const navigateToHome = ()=>{
      router.push("/home")
  }

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      const maxUp = -100;
      const maxDown = 0;
    
      offset.value = {
        y: Math.min(Math.max(e.translationY, maxUp), maxDown),
      };


    })
    .onEnd((e) => {
      const maxDown = 0;
      const maxUp = -100;

      offset.value = withSpring({ y: 0 }, { mass: 1,stiffness:300,damping:17 });
        const maxOffsetY =  Math.min(Math.max(e.translationY, maxUp), maxDown)
         if(maxOffsetY=== maxUp){
          scheduleOnRN(navigateToHome) 
      }
    });

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
          <View style={[styles.btnContainer]}>
            <ChevronUp color="#fff" size={48} />
            <GestureDetector gesture={panGesture}>
              <Animated.View style={[styles.btn, animatedStyle]}>
                <Text style={styles.txt}>Go</Text>
              </Animated.View>
            </GestureDetector>
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
    gap: 45,
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
