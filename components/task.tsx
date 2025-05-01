import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";
import clsx from "clsx"; // Optional: use for conditional class names

interface TaskProps {
  title: string;
  description?: string;
  completed: boolean;
  onToggle: () => void;
}

const Task = ({ title, description, completed, onToggle }: TaskProps) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View className="flex-row items-start py-6 border-b border-neutral-700">
        <Checkbox checked={completed} onCheckedChange={onToggle} />
        <View className="ml-3">
          <Text
            className={clsx(
              "text-base text-white",
              completed && "line-through text-neutral-500"
            )}
          >
            {title}
          </Text>
          {description && (
            <Text
              className={clsx(
                "text-sm text-neutral-400",
                completed && "line-through"
              )}
            >
              {description}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
