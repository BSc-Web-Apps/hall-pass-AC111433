import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";
import clsx from "clsx";

interface TaskProps {
  title: string;
  description?: string;
  completed: boolean;
  onToggle: () => void;
  onEditTitle: (newTitle: string) => void;
  onEditDescription: (newDescription: string) => void;
}

const Task = ({
  title,
  description,
  completed,
  onToggle,
  onEditTitle,
  onEditDescription,
}: TaskProps) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description || "");

  return (
    <TouchableOpacity onPress={onToggle}>
      <View className="flex-row items-start py-6 border-b border-neutral-700">
        <Checkbox checked={completed} onCheckedChange={onToggle} />
        <View className="ml-3 flex-1">
          <TextInput
            className={clsx(
              "text-base text-white mb-1",
              completed && "line-through text-neutral-500"
            )}
            value={editedTitle}
            onChangeText={(text) => {
              setEditedTitle(text);
              onEditTitle(text);
            }}
            placeholder="Task Title"
            placeholderTextColor="#888"
          />
          <TextInput
            className={clsx(
              "text-sm text-neutral-400",
              completed && "line-through"
            )}
            value={editedDescription}
            onChangeText={(text) => {
              setEditedDescription(text);
              onEditDescription(text);
            }}
            placeholder="Description"
            placeholderTextColor="#666"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
