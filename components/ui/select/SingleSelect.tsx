import { ChevronDown } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";

import DropdownModal from "./DropdownModal";
import { SingleSelectProps } from "./types";

export default function SingleSelect({
  data,
  value,
  placeholder = "Select",
  searchable = true,
  disabled = false,
  onChange,
}: SingleSelectProps) {
  const [open, setOpen] = useState(false);

  const selectedItem = useMemo(() => {
    return data.find((item) => item.value === value);
  }, [data, value]);

  return (
    <>
      <Pressable
        disabled={disabled}
        onPress={() => setOpen(true)}
        className={`flex-row items-center justify-between rounded-xl border px-4 py-3 h-3 ${
          disabled ? "border-zinc-200 bg-zinc-100" : "border-zinc-300 bg-white"
        }`}
      >
        <View className="flex-1">
          <Text className="mb-1 text-xs text-zinc-500">Category</Text>

          <Text
            numberOfLines={1}
            className={`text-base ${
              selectedItem ? "text-zinc-800" : "text-zinc-400"
            }`}
          >
            {selectedItem?.label ?? placeholder}
          </Text>
        </View>

        <ChevronDown size={20} color="#71717A" />
      </Pressable>

      <DropdownModal
        visible={open}
        title="Select Category"
        data={data}
        value={value}
        searchable={searchable}
        onClose={() => setOpen(false)}
        onSelect={(item) => {
          onChange(item.value);
          setOpen(false);
        }}
      />
    </>
  );
}
