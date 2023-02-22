import { useState } from "react";
import Table from "./Components/Table";
import "./App.scss";
document.title = "Homework_3";
function App() {
  const [info, setInfo] = useState([
    {
      id: 1,
      title: "Terminator",
      genre: "Action",
      stock: 6,
      rate: 2.5,
    },
    {
      id: 2,
      title: "Die Hard",
      genre: "Action",
      stock: 5,
      rate: 2.5,
    },
    {
      id: 3,
      title: "Get Out",
      genre: "Thriller",
      stock: 8,
      rate: 3.5,
    },
    {
      id: 4,
      title: "Trip to Italy",
      genre: "Comedy",
      stock: 7,
      rate: 3.5,
    },
    {
      id: 5,
      title: "Airplane",
      genre: "Comedy",
      stock: 7,
      rate: 3.5,
    },
  ]);

  function clickDelte(id) {
    setInfo(info.filter((item) => item.id !== id));
  }

  return (
    <div className="Wrapper">
      <p className="Info">Showing {info.length} movies in the database.</p>
      <Table info={info} clickDelte={clickDelte} />
    </div>
  );
}

export default App;
