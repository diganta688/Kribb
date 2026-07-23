import { X } from "lucide-react-native";
import React from "react";
import { Pressable, TextInput, View } from "react-native";

import FormField from "./FormField";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
}

export default function Input({ label, placeholder, value, onChange }: Props) {
  return (
    <FormField label={label}>
      <View className="flex-row items-center">
        <TextInput
          className="flex-1 py-1"
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />

        {value.length > 0 && (
          <Pressable onPress={() => onChange("")}>
            <X size={18} color="#71717A" />
          </Pressable>
        )}
      </View>
    </FormField>
  );
}
