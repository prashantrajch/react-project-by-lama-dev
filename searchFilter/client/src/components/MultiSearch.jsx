import React, { useState } from "react";
import Table from "./Table";
import { Users } from "../../users";

const MultiSearch = () => {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const filteredData = (data) => {
    return data?.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="app">
      <input
        type="search"
        name="search"
        id="search"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={filteredData(Users)} />
    </div>
  );
};

export default MultiSearch;
