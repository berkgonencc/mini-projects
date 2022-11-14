import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";

function ToDoClear() {
    const context = useContext(ItemContext);
    const clearCompleted = () => context.setListe(context.list.filter(item => !item.completed));
    return (
        <button onClick={() => { clearCompleted() }} className="clear">
            Clear All Completed!
        </button>
    )
}

export default ToDoClear;