import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, eggs, bread",
      completed: false,
    },
    {
      id: 2,
      title: "Do laundry",
      description: "Wash and fold clothes",
      completed: false,
    },
    {
      id: 3,
      title: "Finish project",
      description: "Due next week",
      completed: false,
    },
    {
      id: 4,
      title: "Go out for dinner",
      description: "Due next week",
      completed: false,
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

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

  const handleUpdateTitle = (id: number, newTitle: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  const handleUpdateCategory = (id: number, newDescription: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: "New Task",
      description: "Task description",
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <View className="bg-background min-h-screen">
      <ScrollView className="flex-1 px-4 pt-4 pb-10">
        <View className="pt-28 pb-12">
          <Text className="text-white text-6xl font-bold text-center">
            HallPass
          </Text>
        </View>
        {tasks.map((task) => (
          <View key={task.id} className="mb-3">
            <Task
              title={task.title}
              description={task.description}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
              onEditTitle={(newTitle) => handleUpdateTitle(task.id, newTitle)}
              onEditDescription={(newDescription) =>
                handleUpdateCategory(task.id, newDescription)
              }
              onDelete={() => deleteTask(task.id)}
            />
          </View>
        ))}
      </ScrollView>

      {/* Circular Add Task Button */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#000", // Footer background color
        }}
      >
        <TouchableOpacity
          onPress={addTask}
          style={{
            backgroundColor: "#1E90FF", // Blue color
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5, // For Android shadow
          }}
        >
          <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskList;
