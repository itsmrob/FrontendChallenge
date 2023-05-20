/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef } from "react";

function Input(props) {
    // Implement
    return <TextInput ref={props.ref}/>
}

const TextInput = React.forwardRef((props, ref) => {
    // Implement
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    );
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focusable = false }) {
    // Implement
    const inputRef = useRef();

    return <Input ref={inputRef.current.focus()} />
}
