import { Search, X } from "lucide-react-native";
import { Pressable, TextInput, View } from "react-native";

interface SearchInputProps {
  value: string;
  onChange: (text: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <View className="mb-4 flex-row items-center rounded-xl border border-zinc-300 bg-white px-3">
      <Search size={18} color="#71717A" />

      <TextInput
        className="flex-1 px-3 py-3"
        placeholder="Search..."
        value={value}
        onChangeText={onChange}
      />

      {value.length > 0 && (
        <Pressable onPress={() => onChange("")}>
          <X size={18} color="#71717A" />
        </Pressable>
      )}
    </View>
  );
}
