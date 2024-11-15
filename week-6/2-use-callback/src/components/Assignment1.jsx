import { useCallback, memo, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() => {
        setCount(function (currentCount) {
            return currentCount + 1;
        })
    },)

    // setCount(count - 1) --> here we requrie to write dependancy count
    // setCount(function (currentCount) {
    //     return currentCount + 1;
    // }) and setCount(count => count - 1) --> if we write it as a function , we don't need to wirte dependancy


    const handleDecrement = useCallback(() => {
        setCount(count => count - 1)
    },)
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
