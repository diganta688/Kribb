import React, { useMemo, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import TodoCard from "./TodoCard";
import TodoInput from "./TodoInput";

export default function TodoRender({ data }: any) {
  const dates = useMemo(() => {
    return [...new Set(data.map((item: any) => item.createdAt))];
  }, [data]);

  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const filteredData = data.filter(
    (item: any) => item.createdAt === selectedDate,
  );
  return (
    <View>
      <TodoInput />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 10,
        }}
      >
        {dates.map((date: any) => (
          <Pressable
            key={date}
            onPress={() => setSelectedDate(date)}
            className={`rounded-xl px-4 py-2 ${
              selectedDate === date ? "bg-indigo-500" : "bg-zinc-800"
            }`}
          >
            <Text className="text-white">{date}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          gap: 10,
          marginBottom: 10,
        }}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <View className="flex-1">
            <TodoCard todo={item} />
          </View>
        )}
      />
    </View>
  );
}
