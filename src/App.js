import "./App.css";
import { useState, useEffect } from "react";

const InputField = ({ addItems }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleButtonClick = () => {
    addItems(todoInput);
    setTodoInput("");
  };

  return (
    <div>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        type="text"
        placeholder="Add a new task"
      />
      <button className="btn btn-primary" onClick={handleButtonClick}>Add</button>
    </div>
  );
};

// React Seperate HTML into small components
// React Components are functions that return JSX

const users = {
  name: "John",
  role: "Instructor",
};

const ListItem = ({ title }) => {
  // const { title } = props;  => ({ title })so basically we replace the parameter props with {title} because title is actually a prop.
  return <p>{title}</p>;
};

// const ListItem = ( props ) => {
//   // const { title } = props;  => ({ title })so basically we replace the parameter props with {title} because title is actually a prop.
//   return (
//     <p>{props.title}</p>
//   )
// };

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search for a task" />
    </div>
  );
};

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("listItem");
    if (savedTodos) {
      setTodoList(savedTodos.split(","));
    }
  }, []);

  useEffect(() => {
    console.log("Update Local storage");
    if (todoList.length !== 0){
      localStorage.setItem("listItem", todoList);
    }
  }, [todoList])


  const addItems = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField addItems={addItems} />
      {todoList.map((todo) => {
        return <ListItem title={todo} />;
      })}
      {/* < ListItem title= "Go School"/> */}
      <SearchBar />
    </div>
  );
}

export default App;
addItems