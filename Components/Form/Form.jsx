/** @format */

import React, { useState } from "react";

export default function Form({ setUsername }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
