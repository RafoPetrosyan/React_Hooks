import React, {useState, useCallback} from "react";
import ElementItems from "../components/ElementItems";

function ExampleCallback() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'darkred' : 'black',
    };

    const generateItemsFromApi = useCallback((indexNumber) => {
        return new Array(count).fill('').map((_, i) => `Element ${i + indexNumber}`);
    }, [count]);

    return (
        <>
            <h1 style={styles}>Element count: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setColored(prev => !prev)}>setColored</button>

            <ElementItems getItems={generateItemsFromApi}/>
        </>
    )
}

export default ExampleCallback;
