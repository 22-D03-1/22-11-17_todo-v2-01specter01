import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState([]);

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
                                    alignContent: "space-between",
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
