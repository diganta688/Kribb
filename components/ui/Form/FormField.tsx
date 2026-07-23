import React from "react";
import { Text, View } from "react-native";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
}

export default function FormField({ label, children, error }: FormFieldProps) {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm font-medium text-zinc-600">{label}</Text>

      <View className="min-h-[56px] justify-center rounded-xl border border-zinc-300 bg-white px-4">
        {children}
      </View>

      {error && <Text className="mt-1 text-xs text-red-500">{error}</Text>}
    </View>
  );
}
