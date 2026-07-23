import React, { useMemo, useState } from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";

import OptionItem from "./OptionItem";
import SearchInput from "./SearchInput";
import { SelectOption } from "./types";

interface DropdownModalProps {
  visible: boolean;
  title?: string;
  data: SelectOption[];

  value?: string;
  values?: string[];

  multiple?: boolean;
  searchable?: boolean;

  onClose: () => void;
  onSelect: (item: SelectOption) => void;
}

export default function DropdownModal({
  visible,
  title = "Select",
  data,

  value,
  values,

  multiple = false,
  searchable = true,

  onClose,
  onSelect,
}: DropdownModalProps) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;

    return data.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, data]);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <Pressable className="flex-1 bg-black/40 justify-end" onPress={onClose}>
        <Pressable className="rounded-t-3xl bg-white p-5" onPress={() => {}}>
          <Text className="mb-4 text-lg font-bold">{title}</Text>

          <SearchInput value={search} onChange={setSearch} />

          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.value}
            keyboardShouldPersistTaps="handled"
            ItemSeparatorComponent={() => <View className="h-2" />}
            renderItem={({ item }) => (
              <OptionItem
                item={item}
                selected={
                  multiple
                    ? (values?.includes(item.value) ?? false)
                    : item.value === value
                }
                onPress={(selectedItem) => {
                  onSelect(selectedItem);

                  if (!multiple) {
                    setSearch("");
                  }
                }}
              />
            )}
            ListEmptyComponent={() => (
              <View className="py-10">
                <Text className="text-center text-zinc-400">
                  No results found
                </Text>
              </View>
            )}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
}
