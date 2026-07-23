import { Check } from "lucide-react-native";
import { Pressable, Text } from "react-native";
import { SelectOption } from "./types";

interface OptionItemProps {
  item: SelectOption;
  selected: boolean;
  onPress: (item: SelectOption) => void;
}

export default function OptionItem({
  item,
  selected,
  onPress,
}: OptionItemProps) {
  return (
    <Pressable
      onPress={() => onPress(item)}
      className={`flex-row items-center justify-between rounded-xl px-4 py-3 ${
        selected ? "bg-indigo-50" : "bg-white"
      }`}
    >
      <Text
        className={`text-base ${
          selected ? "font-semibold text-indigo-600" : "text-zinc-700"
        }`}
      >
        {item.label}
      </Text>

      {selected && <Check size={18} color="#4F46E5" />}
    </Pressable>
  );
}
