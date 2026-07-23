import { ChevronDown } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import Chip from "./Chip";
import DropdownModal from "./DropdownModal";
import { MultiSelectProps } from "./types";

export default function MultiSelect({
  data,
  values,
  placeholder = "Select",
  searchable = true,
  disabled = false,
  onChange,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);

  const selectedItems = useMemo(() => {
    return data.filter((item) => values.includes(item.value));
  }, [data, values]);

  const toggleValue = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <>
      <Pressable
        disabled={disabled}
        onPress={() => setOpen(true)}
        className={`rounded-xl border px-4 py-3 ${
          disabled ? "border-zinc-200 bg-zinc-100" : "border-zinc-300 bg-white"
        }`}
      >
        <View className="mb-2 flex-row items-center justify-between">
          <Text className="text-xs text-zinc-500">Tags</Text>

          <ChevronDown size={20} color="#71717A" />
        </View>

        {selectedItems.length === 0 ? (
          <Text className="text-zinc-400">{placeholder}</Text>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row flex-wrap">
              {selectedItems.map((item) => (
                <Chip
                  key={item.value}
                  label={item.label}
                  onRemove={() => toggleValue(item.value)}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </Pressable>

      <DropdownModal
        visible={open}
        title="Select Tags"
        data={data}
        values={values}
        searchable={searchable}
        multiple
        onClose={() => setOpen(false)}
        onSelect={(item) => {
          toggleValue(item.value);
        }}
      />
    </>
  );
}
