import React from 'react';
function Counter() {
    const [count, setCount] = React.useState(0);
    function handleIncrement(preIncrement) {
        setCount(preIncrement + 1);
    }
    function handleDecrement(preDecrement) {
        setCount(preDecrement - 1);
    }
    return(
        <>
        <h1>Counter:{count}</h1>
        <button onClick={() => handleIncrement(count)}>Increment</button>
        <button onClick={() => handleDecrement(count)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}
export default Counter;