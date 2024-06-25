import React from "react";

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="row">
      <input
        type="text"
        className="form-control col-lg-10 col-md-8"
        placeholder="Search"
        name="maxArea"
        value={value}
        onChange={onChange}
      />
      <button
        className="btn col-lg-1 col-md-2 mx-2 align-items-center justify-content-center"
        onClick={onSearch}
        style={{color: "#fff",backgroundColor: "#B79763",borderColor: "#B79763"
        }}
      >
        <i class="fas fa-search fa-lg center"></i>
      </button>
    </div>
  );
}
