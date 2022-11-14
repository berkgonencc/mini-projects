import React, { useContext } from "react";
import { MdDelete, MdCheckCircle, MdCheckCircleOutline } from "react-icons/md";
import { ItemContext } from "../../contexts/ItemContext";
function ToDoItem({ item }) {
  const context = useContext(ItemContext);
  const clearItem = (id) =>
    context.setList(context.list.filter((item) => item.id !== id));
  const markCompleted = (id) =>
    context.setList(
      context.list.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : i
      )
    );
  return (
    <div className="toDoItem">
      <div
        key={item.id}
        className={item.completed ? "completed" : ""}
        style={{ textAlign: "left" }}
      >
        {item.title}
      </div>
      <div>
        <button
          className="btn btn-completed"
          onClick={() => {
            markCompleted(item.id);
          }}
        >
          {item.completed ? (
            <MdCheckCircleOutline color="white" />
          ) : (
            <MdCheckCircle color="white" />
          )}
        </button>
        <button className="btn btn-delete">
          <MdDelete
            color="white"
            onClick={() => {
              clearItem(item.id);
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
