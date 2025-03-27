import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";

export default function HomeScreen() {
  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView className="flex-1 bg-black justify-center items-center">
      <View className="w-4/5 border-2  rounded-lg p-4 flex-row items-center space-x-3 bg-gray-900">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <Text className="text-white text-lg">Feed the cat</Text>
      </View>
    </SafeAreaView>
  );
}
