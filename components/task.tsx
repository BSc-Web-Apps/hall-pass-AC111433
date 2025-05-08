import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface TaskProps {
  title: string;
  description: string;
  completed: boolean;
  onToggle: () => void;
  onEditTitle?: (newTitle: string) => void;
  onEditDescription?: (newDescription: string) => void;
  onDelete?: () => void;
}

const Task: React.FC<TaskProps> = ({
  title,
  description,
  completed,
  onToggle,
  onEditTitle,
  onEditDescription,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSave = () => {
    if (onEditTitle) onEditTitle(newTitle);
    if (onEditDescription) onEditDescription(newDescription);
    setIsEditing(false);
  };

  return (
    <TouchableOpacity
      onPress={onToggle} // Single tap to toggle completion
      onLongPress={() => setIsEditing(true)} // Long press to enter edit mode
      activeOpacity={0.8}
    >
      <View className="flex-row items-center p-4 bg-black rounded-lg mb-4 shadow-lg">
        {/* Task Content */}
        <View style={{ flex: 1 }}>
          {isEditing ? (
            <>
              <TextInput
                value={newTitle}
                onChangeText={setNewTitle}
                className="bg-gray-800 text-white p-2 mb-2 rounded"
                placeholder="Edit Title"
                placeholderTextColor="#aaa"
              />
              <TextInput
                value={newDescription}
                onChangeText={setNewDescription}
                className="bg-gray-800 text-white p-2 mb-2 rounded"
                placeholder="Edit Description"
                placeholderTextColor="#aaa"
              />
              <TouchableOpacity onPress={handleSave}>
                <Text style={{ color: "white", marginBottom: 5 }}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsEditing(false)}>
                <Text style={{ color: "white" }}>Cancel</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text
                className={`text-lg font-bold ${
                  completed ? "text-gray-500 line-through" : "text-white"
                }`}
              >
                {title}
              </Text>
              <Text
                className={`${
                  completed ? "text-gray-500 line-through" : "text-gray-400"
                }`}
              >
                {description}
              </Text>
            </>
          )}
        </View>

        {/* Bin Icon */}
        <TouchableOpacity onPress={onDelete} style={{ marginLeft: 10 }}>
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
