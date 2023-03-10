import React, { useEffect } from "react";
import "./TableItem.scss";

export default function TableItem({ info, clickDelte }) {
  const { id, title, genre, stock, rate } = info;

	useEffect(() => {
	console.log("birth")
		return () => {
			console.log("the end for", id)
		}
	}, [])
	

  return (
    <div className="Table_Item">
      <div className="Table_Item_Info">{title}</div>
      <div className="Table_Item_Info">{genre}</div>
      <div className="Table_Item_Info">{stock}</div>
      <div className="Table_Item_Info">{rate}</div>
      <button className="Table_Item_Info" onClick={() => clickDelte(id)}>
        Delete
      </button>
    </div>
  );
}
