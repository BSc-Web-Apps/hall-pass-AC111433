import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Task from "../components/task"; // Adjust path as needed

// Mock FontAwesome from @expo/vector-icons
jest.mock("@expo/vector-icons", () => {
  const MockFontAwesome = ({ name, size, color }) => {
    return <div>{`Mocked Icon: ${name}, Size: ${size}, Color: ${color}`}</div>;
  };
  return {
    FontAwesome: MockFontAwesome,
  };
});

describe("Task", () => {
  test("renders a task", () => {
    const task = {
      title: "Test Task",
      description: "Test description",
      completed: false,
      onToggle: jest.fn(),
      onDelete: jest.fn(),
      onEditTitle: jest.fn(),
      onEditDescription: jest.fn(),
    };

    render(
      <Task
        title={task.title}
        description={task.description}
        completed={task.completed}
        onToggle={task.onToggle}
        onDelete={task.onDelete}
        onEditTitle={task.onEditTitle}
        onEditDescription={task.onEditDescription}
      />
    );

    // Just check if the title and description are displayed
    const titleElement = screen.getByText("Test Task");
    const descriptionElement = screen.getByText("Test description");
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });
});
