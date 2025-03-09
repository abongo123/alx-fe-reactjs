import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; 
import React from "react";


const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Write Tests", completed: false },
];

describe("TodoList Component", () => {
  test("renders the TodoList component with initial todos", () => {
    render(<TodoList />);
    

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");


    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);


    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo's completed state", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);


    expect(todoItem).toHaveClass("completed");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);


    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
