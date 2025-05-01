import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Task from "~/components/task";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Submit Assignment",
      description: "Due: Oct 20",
      completed: false,
    },
    {
      id: 2,
      title: "Library Research",
      description: "Economics",
      completed: true,
    },
    {
      id: 3,
      title: "Group Project Meeting",
      description: "Prepare slides",
      completed: false,
    },
    {
      id: 4,
      title: "Read Chapter 5",
      description: "For next class",
      completed: false,
    },
    {
      id: 5,
      title: "Submit Essay",
      description: "English Literature",
      completed: true,
    },
    {
      id: 6,
      title: "Quiz Preparation",
      description: "Math Quiz",
      completed: false,
    },
    {
      id: 7,
      title: "Lab Report Submission",
      description: "Physics Lab",
      completed: false,
    },
    {
      id: 8,
      title: "Project Proposal",
      description: "History Project",
      completed: true,
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
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
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default TaskList;
