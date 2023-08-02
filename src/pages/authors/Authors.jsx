import React, { useState } from "react";
import "./authors.css";
import { authors } from "../../data/authors";

export default function Authors() {
  const [search, setSearch] = useState("");
  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <input
          type="search"
          placeholder="search in authers"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="authors-wrapper">
        {authors
          .filter((a) => a.name.toLowerCase().includes(search))
          .map((author) => (
            <div className="author" key={author.id}>
              <img src={author.image} alt="" className="author-img" />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))}
      </div>
    </section>
  );
}
