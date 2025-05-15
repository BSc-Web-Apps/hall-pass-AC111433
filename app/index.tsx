import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
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
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>HallPass</Text>
        </View>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskContainer}>
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

      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Background color
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    paddingVertical: 20,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  taskContainer: {
    marginBottom: 16,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
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
  },
});

export default TaskList;
