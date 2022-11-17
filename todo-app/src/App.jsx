import { useState } from "react";
import "./App.css";
import TodosList from "./TodosList";

function App() {
    const [todos, setTodo] = useState([
        {
            text: "clean kitchen",
            id: 0,
        },
        {
            text: "learn programming",
            id: 1,
        },
    ]);
    const handleClickDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodo(newTodos);
    };
    return (
        <div className="App">
            <TodosList
                todos={todos}
                title="Todo ithem:"
                handleClickDelete={handleClickDelete}
            />
        </div>
    );
}

export default App;
