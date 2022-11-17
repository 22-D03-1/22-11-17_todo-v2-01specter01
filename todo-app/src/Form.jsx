import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

const useImputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: (e) => setValue(e.target.value),
        resetValue: () => setValue(""),
    };
};

const isItChecked = () => {
    
}

export default ({ onSubmit }) => {
    const { resetValue, ...text } = useImputValue("");

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(text.value);
                resetValue();
            }}
        >
            {" "}
            <h1>My todo List</h1>
            <input
                placeholder="wright the todos"
                checked={isItChecked}
                {...text}
            />
        </Form>
    );
};
