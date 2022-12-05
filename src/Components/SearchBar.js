import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="form-control">
        <div className="input-group input-group-lg">
          <select
            className="select select-bordered  md:input-lg text-xs md:text-xl w-7 md:w-44 max-w-md"
            style={{ outline: "none" }}
          >
            <option disabled selected>
              Category
            </option>
            <option>T-shirts</option>
            <option>Mugs</option>
          </select>

          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full md:w-72 max-w-lg md:input-lg text-xs md:text-xl"
            style={{ outline: "none" }}
          />
          <button className="btn btn-square md:btn-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
