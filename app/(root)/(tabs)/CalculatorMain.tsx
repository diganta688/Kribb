import { router } from "expo-router";
import { Calculator, Delete } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalculatorMain() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const handlePress = (value: string) => {
    if (value === "=") {
      calculate();
      return;
    }

    if (value === "C") {
      setExpression("");
      setResult("0");
      return;
    }

    if (value === "⌫") {
      setExpression((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "%") {
      setExpression((prev) => prev + "/100");
      return;
    }

    setExpression((prev) => prev + value);
  };

  const calculate = () => {
    try {
      const exp = expression.replace(/×/g, "*").replace(/÷/g, "/");

      const value = eval(exp);

      setResult(String(value));
    } catch (error:any) {
      setResult("error");
      console.log(result);
      
    }
  };

  const buttons = [
    ["C", "⌫", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <SafeAreaView
      className={`flex-1  px-5 pt-5 ${isDarkMode ? "bg-black" : "bg-red-500"}`}
    >
      {/* Header */}
      <View className="flex-row justify-between items-center mb-8">
        <View className="flex-row items-center gap-2">
          <Calculator color="white" size={28} />
          <Text className="text-white text-2xl font-bold">Calculator</Text>
        </View>

        <Pressable onPress={() => router.push("/(root)/(tabs)/CalculatorMain")}>
          <Text className="text-blue-500 text-lg">Back</Text>
        </Pressable>
      </View>

      {/* Display */}
      <View className="flex-1 justify-end mb-8">
        <Text className="text-gray-400 text-3xl text-right" numberOfLines={1}>
          {expression || "0"}
        </Text>

        <Text
          className="text-white text-6xl font-bold text-right mt-3"
          numberOfLines={1}
        >
          {result}
        </Text>
      </View>

      {/* Buttons */}
      <View className="gap-3 pb-5">
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row justify-between">
            {row.map((item) => {
              const isOperator = ["+", "-", "×", "÷", "%"].includes(item);

              const isEqual = item === "=";

              const isClear = item === "C";

              return (
                <Pressable
                  key={item}
                  onPress={() => handlePress(item)}
                  className={`h-20 rounded-full justify-center items-center
                  ${
                    isEqual
                      ? "bg-blue-600 flex-1 ml-3"
                      : isOperator
                        ? "bg-orange-500 w-20"
                        : isClear
                          ? "bg-red-500 w-20"
                          : "bg-zinc-800 w-20"
                  }`}
                >
                  {item === "⌫" ? (
                    <Delete color="white" size={28} />
                  ) : (
                    <Text className="text-white text-3xl font-bold">
                      {item}
                    </Text>
                  )}
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
