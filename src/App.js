import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/todo");
        console.log(resp.data);
         setTodo(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    fetchData();
  }, [value]);

  const handleChange = async (e) => {
     setValue(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/todo", [value]);
    // .then(() => console.log("todo created"))
    // .catch((err) => {
    //   console.error(err);
    // });
     setValue("");
  };

  return (
    <div className="App">
      <div id="todos">
        {todo
          ? todo.map((result, index) => (
              <div key={index} data-id={index}>
                <li>{result}</li>
              </div>
            ))
          : null}
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            type="text"
            onChange={handleChange}
            placeholder="Enter todo..."
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
