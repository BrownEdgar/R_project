import React from "react";
import TableItem from "./TableItem";
import "./Table.scss";

export default function Table({ info, clickDelte }) {
  return (
    <div className="Table">
      <div className="Table_Head">
        <div className="Table_Titles">Title</div>
        <div className="Table_Titles">Genre</div>
        <div className="Table_Titles">Stock</div>
        <div className="Table_Titles">Rate</div>
      </div>
      <div className="Table_Body">
        {info.map((item) => {
          return (
            <TableItem key={item.id} info={item} clickDelte={clickDelte} />
          );
        })}
      </div>
    </div>
  );
}
