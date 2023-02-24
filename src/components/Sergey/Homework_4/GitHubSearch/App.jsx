import { useState, useEffect } from "react";
import "./App.scss";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";

function App() {
  const [username, setUsername] = useState("petrosyanSerg");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [username]);

  function SearchUser(user) {
    return setUsername(user);
  }

  return (
    <main className="container">
      <Header />
      <Search Search={SearchUser} />
      <Body data={data} />
    </main>
  );
}

export default App;
