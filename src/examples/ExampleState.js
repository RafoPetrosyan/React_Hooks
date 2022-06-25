import React, {useState} from "react";

function computeInitialCounter() {
    console.log('Some calculations');
    return Math.trunc(Math.random() * 20);
};

function ExampleState() {
    const [counter, setCounter] = useState(() => computeInitialCounter());
    const [state, setState] = useState({
        title: 'state',
        date: Date.now(),
    });

    const increment = () => {
        setCounter(prev => prev + 1);
    };
    const decrement = () => {
        setCounter(prev => prev - 1);
    };
    const updateTitle = () => {
        setState(prev => {
            return {
                ...prev,
                title: 'new state',
            }
        })
    };

    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Delete</button>
            <button onClick={updateTitle}>Edit state</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default ExampleState;
