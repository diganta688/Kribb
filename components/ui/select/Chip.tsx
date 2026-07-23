import { X } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

interface ChipProps {
  label: string;
  onRemove: () => void;
}

export default function Chip({ label, onRemove }: ChipProps) {
  return (
    <View className="mr-2 mb-2 flex-row items-center rounded-full bg-indigo-100 px-3 py-2">
      <Text className="mr-2 font-medium text-indigo-700">{label}</Text>

      <Pressable onPress={onRemove}>
        <X size={16} color="#4338CA" />
      </Pressable>
    </View>
  );
}
