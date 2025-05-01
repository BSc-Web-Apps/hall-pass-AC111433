import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
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

  return (
    <ScrollView className="bg-background min-h-screen px-4 pt-4 pb-10">
      <View className="pt-28 pb-12">
        <Text className="text-white text-6xl font-bold">HallPass</Text>
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
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default TaskList;
