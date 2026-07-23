// import { X } from "lucide-react-native";
// import React, { useState } from "react";
// import { Keyboard, Pressable, Text, TextInput, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Toast from "react-native-toast-message";

// export default function Todo() {
//   const [value, setValue] = useState("");

//   const handleSave = () => {
//     if (!value.trim()) return;

//     Toast.show({
//       type: "success",
//       text1: "Success",
//       text2: "Saved successfully",
//     });
//     Keyboard.dismiss();
//     setValue("");
//   };

//   return (
//     <SafeAreaView>
//       <Text className="text-xl font-bold m-2">Todo</Text>

//       <View className="mx-2 relative">
//         <TextInput
//           placeholder="Enter your task"
//           className="border rounded-xl px-4 py-2 pr-10"
//           value={value}
//           onChangeText={setValue}
//           // keyboardType="number-pad"
//         />

//         {value.length > 0 && (
//           <Pressable
//             onPress={() => setValue("")}
//             className="absolute right-4 top-1/2 -translate-y-1/2"
//           >
//             <Text className="text-gray-500 text-lg">
//               <X size={18} />
//             </Text>
//           </Pressable>
//         )}
//       </View>

//       {value.length > 0 && (
//         <Pressable
//           onPress={handleSave}
//           className="bg-blue-500 m-2 p-3 rounded-xl items-center"
//         >
//           <Text className="text-white font-semibold">Save</Text>
//         </Pressable>
//       )}
//     </SafeAreaView>
//   );
// }

import TodoRender from "@/components/todo/TodoRender";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { dummy } from "../../../JSON/dummyTodo";

export default function todo() {
  return (
    <SafeAreaView>
      <TodoRender data={dummy} />
    </SafeAreaView>
  );
}
