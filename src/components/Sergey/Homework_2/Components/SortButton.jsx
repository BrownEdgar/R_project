import React from "react";

export default function SortButton({ users, setUsers }) {
  function sortByАscending() {
    const tempArr = [...users].sort(
      (firstUs, secUs) => firstUs.year - secUs.year
    );
    setUsers(tempArr);
  }
  return (
    <button className="button-73" onClick={sortByАscending}>
      Sort by Аscending
    </button>
  );
}
