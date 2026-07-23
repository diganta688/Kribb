import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

type Todo = {
  title: string;
  description: string;
  image?: string;
  priority: string;
  category: string;
  status: string;
  favorite: boolean;
  dueDate: string;
  dueTime: string;
  location?: string;
  estimatedMinutes: number;
  spentMinutes: number;
  tags: string[];
  subTasks: {
    completed: boolean;
  }[];
};

export default function TodoCard({ todo }: { todo: Todo }) {
  const progress =
    todo.estimatedMinutes > 0
      ? (todo.spentMinutes / todo.estimatedMinutes) * 100
      : 0;

  const completedSubTasks = todo.subTasks.filter(
    (task) => task.completed,
  ).length;

  return (
    <View className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-900">
      {/* Image */}

      {todo.image && (
        <Image
          source={{ uri: todo.image }}
          className="h-48 w-full"
          resizeMode="cover"
        />
      )}

      <View className="p-5">
        {/* Header */}

        <View className="flex-row justify-between">
          <View className="flex-1 pr-3">
            <Text className="text-xl font-bold text-white" numberOfLines={1}>
              {todo.title}
            </Text>

            <Text className="mt-2 text-zinc-400" numberOfLines={2}>
              {todo.description}
            </Text>
          </View>

          {todo.favorite && <Ionicons name="star" size={22} color="#FACC15" />}
        </View>

        {/* Date & Time */}

        <View className="mt-5 flex-row flex-wrap gap-4">
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={16} color="#A1A1AA" />

            <Text className="ml-2 text-zinc-300">{todo.dueDate}</Text>
          </View>

          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={16} color="#A1A1AA" />

            <Text className="ml-2 text-zinc-300">{todo.dueTime}</Text>
          </View>
        </View>

        {/* Location */}

        {todo.location && (
          <View className="mt-3 flex-row items-center">
            <Ionicons name="location-outline" size={16} color="#A1A1AA" />

            <Text className="ml-2 text-zinc-300">{todo.location}</Text>
          </View>
        )}

        {/* Badges */}

        <View className="mt-5 flex-row flex-wrap gap-2">
          <View className="rounded-full bg-blue-500/20 px-3 py-1">
            <Text className="text-xs font-semibold text-blue-400">
              {todo.category}
            </Text>
          </View>

          <View className="rounded-full bg-red-500/20 px-3 py-1">
            <Text className="text-xs font-semibold uppercase text-red-400">
              {todo.priority}
            </Text>
          </View>

          <View className="rounded-full bg-green-500/20 px-3 py-1">
            <Text className="text-xs font-semibold text-green-400">
              {todo.status}
            </Text>
          </View>
        </View>

        {/* Tags */}

        <View className="mt-5 flex-row flex-wrap gap-2">
          {todo.tags.map((tag) => (
            <View key={tag} className="rounded-full bg-zinc-800 px-3 py-1">
              <Text className="text-xs text-zinc-300">#{tag}</Text>
            </View>
          ))}
        </View>

        {/* Progress */}

        <View className="mt-6">
          <View className="mb-2 flex-row justify-between">
            <Text className="text-xs text-zinc-400">Progress</Text>

            <Text className="text-xs text-zinc-400">
              {todo.spentMinutes}/{todo.estimatedMinutes} min
            </Text>
          </View>

          <View className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <View
              className="h-full rounded-full bg-indigo-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </View>
        </View>

        {/* Footer */}

        <View className="mt-6 flex-row justify-between">
          <View className="flex-row items-center">
            <Ionicons name="checkmark-done-outline" size={18} color="#22C55E" />

            <Text className="ml-2 text-zinc-300">
              {completedSubTasks}/{todo.subTasks.length} Subtasks
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
