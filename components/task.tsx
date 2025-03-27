import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";

interface TaskProps {
  taskName: string;
}

const Task = ({ taskName }: TaskProps) => {
  const [checked, setChecked] = useState(false); // state is local to each Task component

  return (
    <View className="w-4/5 border-2 rounded-lg p-4 flex-row items-center space-x-3 bg-gray-900">
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <Text style={{ color: "white", fontSize: 18 }}>{taskName}</Text>
    </View>
  );
};

export default Task;
