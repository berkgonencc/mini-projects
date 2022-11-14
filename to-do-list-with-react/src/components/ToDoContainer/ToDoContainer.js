import React, { useState } from "react";
import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoList from "../ToDoList/ToDoList";
import ToDoClear from "../ToDoClear/ToDoClear";
import { ItemContext } from "../../contexts/ItemContext";

function ToDoContainer({ tasks }) {
    const [list, setList] = useState(tasks);
    const [newTitle, setNewTitle] = useState('');

    return (
        <ItemContext.Provider value={{ list, setList, newTitle, setNewTitle }}>
            <ToDoHeader />
            <ToDoList />
            <ToDoClear />
        </ItemContext.Provider>
    )
}
export default ToDoContainer;