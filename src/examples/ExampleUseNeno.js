import React, {useEffect, useState, useRef, useMemo} from "react";

function complexCompute(num) {
    console.log('complexCompute');
    let i = 0;
    while (i < 1000000000) i++;
    return num + 2;
}

function ExampleUseMemo() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black',
    }), [colored]);

    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    useEffect(() => {
        console.log('Styles changed');
    }, [styles]);

    return (
        <>
            <h1 style={styles}>Number: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>+</button>
            <button onClick={() => setNumber(prev => prev - 1)}>-</button>
            <button onClick={() => setColored(prev => !prev)}>SetColored</button>
        </>
    )
}

export default ExampleUseMemo;
