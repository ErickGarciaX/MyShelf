import {useState} from 'react';

function Train() {

    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleAdd = () => {
        if(inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }

    }

    const handleDelete = (indexToDelete) => {
        setItems(items.filter((_,index) => index !== indexToDelete));


    };

    return (
        <>
            <main>
                <h3>Type something:</h3>
                <input 
                    onChange={(e) => setInputValue(e.target.value)} 
                    value={inputValue}
                    type="text" 
                    placeholder="Type here..." >
                </input>
                <button onClick={handleAdd}>Add</button>
            </main>                     
            <ul>
                {items.map((items, index) => (
                    <li key={index}>
                        {items}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Train;

