import { useState } from "react";

const ToDoForm = ({ addTask }) => {
    const [ userInput, setUserInput ]= useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange} placeholder="Enter task..." />
            <button>Add To List</button>
        </form>
    );
};

export default ToDoForm;