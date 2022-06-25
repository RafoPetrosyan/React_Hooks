import React, {useEffect, useState, useRef} from "react";


function ExampleRef() {
    // const [renderCount, setRenderCount] = useState(1);
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('');


    useEffect(() => {
        renderCount.current++;
        console.log(inputRef.current.value);
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    const focus = () => inputRef.current.focus();

    return (
        <div className="App">
            <h1>Render Count: {renderCount.current}</h1>
            <h2>Prev Value: {prevValue.current}</h2>
            <input ref={inputRef} type='text' onChange={({target: {value}}) => setValue(value)} value={value}/>
            <button onClick={focus}>Focus</button>
        </div>
    );
}

export default ExampleRef;
