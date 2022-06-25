import React, {useEffect, useState} from "react";

const ElementItems = ({getItems}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = getItems(42);
        setItems(newItems);
        console.log('render ElementItems')
    }, [getItems]);

    return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>

}
export default ElementItems;