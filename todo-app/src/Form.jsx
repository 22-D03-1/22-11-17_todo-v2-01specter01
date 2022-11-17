import React, { useState } from "react";

const useImputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: (e) => setValue(e.target.value),
    };
};

export default () => {
    const text = useImputValue("");
    return (
        <div>
            {" "}
            <input {...text} />
        </div>
    );
};
