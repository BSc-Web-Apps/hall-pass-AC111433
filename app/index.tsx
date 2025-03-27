import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";
import Task from "~/components/task";

const TaskList = () => {
  const tasks = [
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
    { id: 4, name: "Task 4" },
  ];

  return (
    <ScrollView>
      {tasks.map((task) => (
        <Task key={task.id} taskName={task.name} />
      ))}
    </ScrollView>
  );
};

export default TaskList;
