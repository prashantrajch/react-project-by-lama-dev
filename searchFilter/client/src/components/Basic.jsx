import React, { useState } from "react";
import { Users } from "../../users";

const Basic = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredUser = Users.filter((user) =>
    user.first_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="app">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search...."
        className="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ul className="list">
        {filteredUser.map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basic;
