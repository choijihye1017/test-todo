import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [box, setUsers] = useState([{ id: 1, name: "React를 배워봅시다" }]);

  const [name, setName] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const clickAddButton = () => {
    //새로운 형태의 newUser를 만든다.
    //newUser:{ id: 1, age: 30, name: "송중기" }
    //newUser를 배열에 더한다(users.length+1).
    const newUser = {
      id: box.length + 1,
      name: name,
    };
    setUsers([...box, newUser]);
    //배열의 불변성 유지를 위해 users를 스프레드했다가 newUser해준 형태로 만든다.
  };

  return (
    <div>
      <div className="container-style">
        <input
          onChange={(event) => nameChangeHandler(event)}
          className="input-style"
        />
        <button onClick={clickAddButton}>추가</button>
        <h2>Todo List</h2>
      </div>

      <div className="app-style">
        {box.map(function (item) {
          return (
            <div key={item.id} className="component-style">
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
