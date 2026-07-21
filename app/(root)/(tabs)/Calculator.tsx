import { router } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {
  return (
    <SafeAreaView className="flex justify-centerr items-center">
      <Text className="">Calculator</Text>
      <Pressable
        onPress={() => router.push("/calculator-main")}
        className="flex-1 border p-3 mx-2 rounded-full mt-4 bg-red-500"
      >
        <Text> go to the main page</Text>
      </Pressable>
    </SafeAreaView>
  );
}
