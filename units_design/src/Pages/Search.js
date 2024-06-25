import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowUnits from "../Components/ShowUnits";
import { search } from "../api/unit";
import { suggest, regex as puzzyRegex } from 'puzzy-search';

export default function Search({ update_favorites, favorites }) {
  const [units, setUnits] = useState([]);
  const [suggestion, setSuggestion] = useState("");
  const { query } = useParams();

  useEffect(() => {
    if (query && query.trim() !== "") {
      searchUnits(query);
    }
  }, [query]);

  const searchUnits = (query) => {
    search(query)
      .then((result) => {
        setUnits(result.data.response);
      })
      .catch((error) => {
        console.error("Error searching for units:", error);
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value) {
      setSuggestion(`Did you mean: ${suggest(value)}`);
    } else {
      setSuggestion("");
    }
  };

  const handleSearchClick = () => {
    const inputValue = document.querySelector('#search').value;
    const regexPattern = puzzyRegex(inputValue);

    fetch(`api.php?regex=${regexPattern}`)
      .then(res => res.json())
      .then(data => {
        setUnits(data);
      })
      .catch(error => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div>
      <input id="search" type="text" onChange={handleInputChange} />
      <button id="btnSearch" onClick={handleSearchClick}>Search</button>
      <br />
      <span id="didyoumean">{suggestion}</span>
      <ShowUnits fav={true} units={units} update_favorites={update_favorites} favorites={favorites} />
    </div>
  );
}
