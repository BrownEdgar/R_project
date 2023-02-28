import { useState } from "react";
import Card from "./Components/Card/Card";
import "./App.scss";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      Model: "Mercedes Benz",
      Complect: "Silver Knight",
      Price: "$5,115",
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      Model: "Audi A1",
      Complect: "Contrast Edition",
      Price: "$1,115",
      img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      id: 3,
      Model: "BMW M4 GT Full",
      Complect: "Silver Knight",
      Price: "$4,115",
      img: "https://images.unsplash.com/photo-1671025376324-9041886bd84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ]);

  return (
    <div>
      <p className="Title">Cars in Stock</p>
      <div className="Cards_Cont">
        {data.map((card) => {
          return <Card key={card.id} info={card} />;
        })}
      </div>
    </div>
  );
}

export default App;
