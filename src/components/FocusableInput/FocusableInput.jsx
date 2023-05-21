/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef, useState } from "react";

import "./FocusableInput.css";

// function Input(props) { Can't achieve this function since we cannot pass "ref" as a prop through a functional component.
//     // Implement
// }

const Input = React.forwardRef((props, ref) => {
    return <input type="text" ref={ref} placeholder={props.placeholder} className="text-input" />;
});

const TextInput = React.forwardRef((props, ref) => {
    // Implement
    const { focused, placeholder, style } = props;
    useEffect(() => {
        if (focused && ref.current) ref.current.focus();
    }, [focused, ref]);
    return <Input ref={ref} placeholder={placeholder} />;
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focusable = false }) {
    // Implement
    const inputRef = useRef();
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused((prevState) => !prevState);
    };
    return (
        <div className="input-container">
            <TextInput ref={inputRef} placeholder="Focus" focused={focused} />
            <button onClick={handleFocus}>
                {focused ? "Lost Focus" : "Set Focus"}
            </button>
        </div>
    );
}
