import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState([]);

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
            />
            <div>
                {todos.map(({ text, complete }, i) => (
                    <div
                        key={text}
                        onClick={() => toggleComplete(i)}
                        style={{
                            textDecoration: complete
                                ? "line-through 3px orange"
                                : "",
                        }}
                    >
                        <ul>
                            <li className="listOne">
                                <span className="spanone">{text}</span>

                                <button className="button-compleate task-button">
                                    <i className="fa fa-check-circle"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
