import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView>
      <Redirect href="/(root)/(tabs)" />
    </SafeAreaView>
  );
}
