import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";

interface TaskProps {
  taskName: string;
}

const Task = ({ taskName }: TaskProps) => {
  const [checked, setChecked] = useState(false); // state is local to each Task component

  return (
    <View className="border-2 rounded-lg p-6 flex-row items-center space-x-3 bg-gray-900">
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <Text style={{ color: "white", fontSize: 16 }}>{taskName}</Text>
    </View>
  );
};

export default Task;
