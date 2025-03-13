import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList component with initial todos", () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole("listitem");
  expect(todoItems.length).toBeGreaterThan(0);
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo...");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Learn Testing" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Learn Testing")).toBeInTheDocument();
});

test("toggles a todo between completed and not completed", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);

  expect(todoItem).not.toBeInTheDocument();
});
