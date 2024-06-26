import './App.css';
import {useState} from "react";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [names, setNames] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddOrUpdateName = (index) => {
        if (inputValue.trim() === '') {
            return;
        }

        if (index === -1) {
            setNames([...names, inputValue]);
        } else {
            const updatedNames = [...names];
            updatedNames[index] = inputValue;
            setNames(updatedNames);
        }

        setInputValue('');
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Введите имя"/>
            <button onClick={() => handleAddOrUpdateName(-1)} disabled={!inputValue.trim()}>Добавить</button>
            {names.length === 0 ? <p>Список пуст</p> : null}
            {names.map((name, index) => (
                <div key={index}>
                    <span>{name}</span>
                    <button onClick={() => handleAddOrUpdateName(index)} disabled={!inputValue.trim()}>Поменять</button>
                </div>
            ))}
        </div>
    );
}

export default App;
