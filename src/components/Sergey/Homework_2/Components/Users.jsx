import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import SortButton from "./SortButton";
import ActiveButton from "./ActiveButton";
import "./mainStyle.css";

export default function Users() {
  const people = [
    { id: 1, name: "Wes", year: 1988 },
    { id: 2, name: "Kait", year: 1986 },
    { id: 3, name: "Irv", year: 1970 },
    { id: 4, name: "Lux", year: 2015 },
  ];

  const [users, setUsers] = useState(people);
  const [isActive, setIsactive] = useState(false);
  return (
    <div className="users">
      <div className="users_list">
        {users.map((user) => (
          <ul key={user.id} className="list_item">
            <DeleteButton users={users} setUsers={setUsers} id={user.id} />
            {user?.isActive ? (
              <span className="active" title="Active"></span>
            ) : null}
            <li className="items">
              <b>Id :</b> {user.id}
            </li>
            <li className="items">
              <b>Name :</b> {user.name}
            </li>
            <li className="items">
              <b>Year :</b> {user.year}
            </li>
          </ul>
        ))}
      </div>
      <div className="buttons">
        <SortButton users={users} setUsers={setUsers} />
        <ActiveButton
          isActive={isActive}
          setIsactive={setIsactive}
          users={users}
          setUsers={setUsers}
        />
      </div>
    </div>
  );
}
