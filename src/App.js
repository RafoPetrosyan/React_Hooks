import React, {useEffect, useState} from "react";

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const onChange = ({target: {value}}) => setValue(value);
    const clear = () => setValue('');

    return {
        bind: {value, onChange},
        value,
        clear,
    }
}

function App() {
    const name = useInput('');
    const lastName = useInput('');

    return (
        <div>
            <input type='text' {...name.bind}/>
            <input type='text' {...lastName.bind}/>
            <button onClick={() => name.clear()}>Clear input</button>
            <h1>{name.value}</h1>
            <h1>{lastName.value}</h1>
        </div>
    )
}
export default App;
