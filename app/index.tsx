import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";

export default function HomeScreen() {
  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView className="flex flex-1 bg-black">
      <View className="flex-row items-center w-full h-16 border-2 border-cyan-400">
        <View className="w-12 h-full border-2 border-pink-400">
          <Checkbox checked={checked} onCheckedChange={setChecked} />
        </View>

        <View className="flex-1 h-full justify-center px-3 border-2 border-green-400">
          <Text className="text-white">Feed the cat</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
