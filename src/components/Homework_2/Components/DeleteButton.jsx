import React from "react";

export default function DeleteButton({ users, setUsers, id }) {
  function delUser(id) {
    const tempArr = users.filter((elem) => elem.id != id);
    setUsers(tempArr);
  }
  return (
    <button className="button-24" onClick={() => delUser(id)}>
      x
    </button>
  );
}
