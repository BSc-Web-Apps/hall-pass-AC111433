import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Task from "~/components/task";

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
    <View className="bg-background min-h-[calc(100vh-47px)]">
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
            backgroundColor: "hsl(11, 100%, 60%)", // Blue color
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
