import ToDoContainer from "./components/ToDoContainer/ToDoContainer";

const INITIAL_STATE = [
  { id: 1, title: 'Do Shopping!', completed: false },
  { id: 2, title: 'Read Book!', completed: false },
  { id: 3, title: 'Watch Gibi!', completed: true }
]

function App() {
  return (
      <div className="App">
        <ToDoContainer tasks={INITIAL_STATE}/>
      </div>
  );
}
export default App;
