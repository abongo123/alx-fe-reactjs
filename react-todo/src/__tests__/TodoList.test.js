import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  
  test("renders the initial todos", () => {
    render(<TodoList />);
    
    expect(screen.getByText(/todo list/i)).toBeInTheDocument(); 
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Learn Testing" } });
    fireEvent.click(button);

    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Sample Todo");
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass("completed"); 
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Sample Todo");
    const deleteButton = screen.getByText(/delete/i);

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });

});
