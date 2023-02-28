import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import SortButton from "./SortButton";
import ActiveButton from "./ActiveButton";
import "./mainStyle.css";
const people = [
	{ id: 1, name: "Wes", year: 1988 },
	{ id: 2, name: "Kait", year: 1986 },
	{ id: 3, name: "Irv", year: 1970 },
	{ id: 4, name: "Lux", year: 2015 },
];
export default function Users() {
  const [users, setUsers] = useState(people);
  const [isActive, setIsactive] = useState(false);


	function sortByАscending() {
		const tempArr = [...users].sort(
			(firstUs, secUs) => firstUs.year - secUs.year
		);
		setUsers(tempArr);
	}
  return (
    <div className="users">
      <div className="users_list">
        {users.map((user) => (
          <ul key={user.id} className="list_item">
            <DeleteButton users={users} setUsers={setUsers} id={user.id} />
						{user?.isActive && <span className="active" title="Active"></span>}
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
				<SortButton sortByАscending={sortByАscending} />
        <ActiveButton
          isActive
          setIsactive={setIsactive}
          users={users}
          setUsers={setUsers}
        />
      </div>
    </div>
  );
}
