import React, { useState } from "react";
import "./Users.css";
export default function Users() {
  const [users, setUsers] = useState([
    { id: window.crypto.randomUUID(), name: "Karen", age: 25, city: "Yerevan" },
    { id: window.crypto.randomUUID(), name: "Kikos", age: 18, city: "Yerevan" },
    { id: window.crypto.randomUUID(), name: "Mher", age: 24, city: "Vanadzor" },
    { id: window.crypto.randomUUID(), name: "Tigran", age: 54, city: "Gyumri" },
    { id: window.crypto.randomUUID(), name: "Vahe", age: 30, city: "Vanadzor" },
    { id: window.crypto.randomUUID(), name: "Lilit", age: 44, city: "Gyumri" },
    { id: window.crypto.randomUUID(), name: "Ani", age: 29, city: "Hrazdan" },
    { id: window.crypto.randomUUID(), name: "Valod", age: 19, city: "Hrazdan" },
  ]);
  const [show, setShow] = useState(false);

  const [sum, setSum] = useState(1);

  function sortByTop() {
    const newUsers = [...users];
    newUsers.sort((userOne, userTwo) => userOne.age - userTwo.age);
    setUsers(newUsers);
  }
  function sortByDown() {

    const newUsers = [...users];
    newUsers.sort((userOne, userTwo) => userTwo.age - userOne.age);
    setUsers(newUsers);
  }

  function showInPage() {
    let result = 0;
    users.forEach((elem) => (result += elem.age));
    setSum(result);
    setShow(!show);
  }

  return (
    <div className="cont_task_3">
      <div className="users_block">
        {show ? <span className="age">Summry users ages: {sum} </span> : null}
        <ul className="users_list">
          {users.map((elem) => {
            return (
              <li key={elem.id}>
                Age: {elem.age} Name: {elem.name} City: {elem.city}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="btn_box">
        <button className="button-89" role="button" onClick={() => sortByTop()}>
          Sort ⬆️
        </button>
        <button
          className="button-89"
          role="button"
          onClick={() => sortByDown()}
        >
          Sort ⬇️
        </button>
        <button
          className="button-89"
          role="button"
          onClick={() => showInPage()}
        >
          Show Sum Ages
        </button>
      </div>
    </div>
  );
}
