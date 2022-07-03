import "./styles.css";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios";

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await axios.get("https://randomuser.me/api/?results=20");
      console.log(data.data.results);
      setData(data.data.results);
    }

    getData();
  }, [search]);

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <Table data={data} />
    </div>
  );
}
