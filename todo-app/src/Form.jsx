import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const useImputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: (e) => setValue(e.target.value),
        resetValue: () => setValue(""),
    };
};

export default ({ onSubmit }) => {
    const { resetValue, ...text } = useImputValue("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(text.value);
                resetValue();
            }}
        >
            {" "}
            <h1>My todo List</h1>
            <input placeholder="wright the todos" {...text} />
        </form>
    );
};
