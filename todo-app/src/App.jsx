import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    const handleChange = (todo) => {
        setTodos(
            todos.map((i) => {
                if (i.id === todo.id) {
                    return { ...i, complete: !i.compleate };
                }
            })
        );
    };

    const toggleComplete = (i) =>
        setTodos(
            todos.map((todo, k) =>
                k === i
                    ? {
                          ...todo,
                          complete: !todo.complete,
                      }
                    : todo
            )
        );

    return (
        <div className="App">
            <Form
                onSubmit={(text) =>
                    setTodos([{ text, complete: false }, ...todos])
                }
                setEditTodo={setEditTodo}
            />
            <div>
                {todos.map(({ text, complete }, i) => (
                    <div
                        key={text}
                        onClick={() => toggleComplete(i)}
                        style={{
                            textDecoration: complete ? "line-through" : "",
                        }}
                    >
                        <ul>
                            <li
                                style={{
                                    border: "2px solid black",
                                    borderRadius: "5px",
                                    alignContent: "space-between",
                                    marginTop: "1rem",
                                }}
                            >
                                <span
                                    style={{
                                        margin: "60px",
                                    }}
                                >
                                    {text}
                                </span>

                                <button className="button-compleate task-button">
                                    <i className="fa fa-check-circle"></i>
                                </button>
                                <button
                                    style={{
                                        margin: "10px",
                                    }}
                                    className="button-edit task-button"
                                >
                                    <i className="fa fa-edit"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
