import React from "react";

export default function ActiveButton({ users, setUsers }) {
  function addActive() {
    const newArr = [...users];
    newArr.forEach((elem) => (elem.isActive = true));
    setUsers(newArr);
  }

  return (
    <button className="button-70" onClick={addActive}>
      Click to activate
    </button>
  );
}
