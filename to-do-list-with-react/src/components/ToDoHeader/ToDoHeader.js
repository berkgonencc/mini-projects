import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
function ToDoHeader() {
    const context = useContext(ItemContext);
    const addNew = (title) => {
        context.setList([...context.list, { id: Date.now(), title: title, completed: false }]);
        context.setNewTitle('');
    }
    return (
        <>
            <h1>To Do List</h1>
            <div className="addForm">
                <input onChange={(e) => context.setNewTitle(e.target.value)} type="text" value={context.newTitle} placeholder="Add new title..." />
                <button
                    onClick={() => { addNew(context.newTitle) }}
                >Add</button>
            </div>
        </>
    )
}

export default ToDoHeader;