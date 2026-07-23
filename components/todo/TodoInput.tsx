import * as ImagePicker from "expo-image-picker";
import { X } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Pressable, Switch, Text, View } from "react-native";
import FormField from "../ui/Form/FormField";
import Input from "../ui/Form/Input";
import SingleSelect from "../ui/select/SingleSelect";
export default function TodoInput() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    priority: "Low" as "High" | "Low",
    status: "",
    dueDate: "",
    dueTime: "",
    createdAt: "",
    favorite: false,
    location: "",
    tags: "",
    subTasks: [],
  });
  const categories = [
    {
      label: "Health",
      value: "health",
    },
    {
      label: "Study",
      value: "study",
    },
    {
      label: "Work",
      value: "work",
    },
    {
      label: "Finance",
      value: "finance",
    },
    {
      label: "Shopping",
      value: "shopping",
    },
    {
      label: "Travel",
      value: "travel",
    },
  ];
  const handleChange = (
    key: keyof typeof form,
    value: string | boolean | any[],
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setForm((prev) => ({
        ...prev,
        image: result.assets[0].uri,
      }));
    }
  };
  return (
    <>
      <View className="flex-row gap-0.5 px-2 w-full">
        <View className="mx-2 relative flex-1">
          <Input
            label="Title"
            placeholder="Enter your task title"
            value={form.title}
            onChange={(text) => handleChange("title", text)}
          />

          {form?.title?.length > 0 && (
            <Pressable
              onPress={() => handleChange("title", "")}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <X size={18} color="gray" />
            </Pressable>
          )}
        </View>
        <View className="mx-2 relative flex-1">
          <Input
            label="Description"
            placeholder="Enter your task description"
            value={form.description}
            onChange={(text) => handleChange("description", text)}
          />
          {form?.description?.length > 0 && (
            <Pressable
              onPress={() => handleChange("description", "")}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <X size={18} color="gray" />
            </Pressable>
          )}
        </View>
      </View>
      <View className="flex-row gap-3 px-2">
        <View className="flex-1">
          <SingleSelect
            label="Category"
            data={categories}
            value={form.category}
            placeholder="Choose Category"
            onChange={(value) => handleChange("category", value)}
          />
        </View>

        <View className="flex-1">
          <FormField label="Priority">
            <View className="flex-row items-center justify-between">
              <Text
                className={`font-medium ${
                  form.priority === "High" ? "text-red-500" : "text-green-500"
                }`}
              >
                {form.priority}
              </Text>

              <Switch
                value={form.priority === "High"}
                onValueChange={(value) =>
                  handleChange("priority", value ? "High" : "Low")
                }
                trackColor={{
                  false: "#86EFAC",
                  true: "#FCA5A5",
                }}
                thumbColor="#fff"
              />
            </View>
          </FormField>
        </View>
      </View>
      <Pressable
        onPress={pickImage}
        className="border border-dashed border-zinc-500 rounded-xl h-48 items-center justify-center"
      >
        {form.image ? (
          <Image
            source={{ uri: form.image }}
            className="w-full h-full rounded-xl"
          />
        ) : (
          <Text>Select Image</Text>
        )}
      </Pressable>
    </>
  );
}
