import React, { useState } from "react";
import style from "./Search.module.scss";
import { BsSearch } from "react-icons/bs";

export default function Search({ Search }) {
  const [inputText, setInputText] = useState("");

  function Submit(event) {
    event.preventDefault();
    Search(inputText);
  }
  return (
    <div className={style.Search}>
      <form className={style.Search_Form} onSubmit={Submit}>
        <label htmlFor="search">
          <BsSearch className={style.Search_Icon} />
        </label>
        <input
          className={style.Search_Input}
          type="search"
          placeholder="Search GitHub Username..."
          id="search"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          required
        />
        <button className={style.Search_Button}>Search</button>
      </form>
    </div>
  );
}
