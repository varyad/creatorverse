import React, { useState } from "react";
import { supabase } from "../client";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AddCreator() {
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  const navigate = useNavigate();

  const createCreator = async (event) => {
    event.preventDefault();

    console.log("New Creator: " + creator);

    try {
      await supabase.from("creatorverse").insert(creator);

      console.log("New Creator added to database!");
      navigate("/");
    } catch (error) {
      console.log("error creating creator: ", error);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setCreator({ ...creator, [name]: value });
  };

  return (
    <>
      <h1>Add Creator</h1>
      <div className="form-container">
        <form onSubmit={createCreator}>
          <label htmlFor="name">
            <h3>Name:</h3>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={creator.name}
            onChange={onChange}
            required
          />

          <label htmlFor="name">
            <h3>Page Link:</h3>
          </label>
          <input
            type="text"
            id="url"
            name="url"
            autoComplete="off"
            value={creator.url}
            onChange={onChange}
            required
          />

          <label htmlFor="name">
            <h3>Description:</h3>
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            autoComplete="off"
            value={creator.description}
            onChange={onChange}
          />

          <label htmlFor="name">
            <h3>Image URL:</h3>
          </label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            autoComplete="off"
            value={creator.imageURL}
            onChange={onChange}
          />
          <br />
          <button type="submit">Add Creator</button>
        </form>
        <Link to={"/"}>
          <button>View Creators</button>
        </Link>
      </div>
    </>
  );
}
