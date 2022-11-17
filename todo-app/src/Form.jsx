import React, { useState } from "react";

const useImputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: (e) => setValue(e.target.value),
    };
};

export default ({ onSubmit }) => {
    const text = useImputValue("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(text.value);
            }}
        >
            {" "}
            <input {...text} />
        </form>
    );
};
