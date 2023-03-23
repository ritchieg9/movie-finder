import { useState, useEffect } from "react";
import { SearchMovies } from "./services/SearchMovies"
import { ResultsList } from "./components/ResultsList";
import { useDebounce } from "./hooks/useDebounce";

import './App.css';

function App() {
  const [searchLine, setsearchLine] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const debouncedsearchLine: string = useDebounce<string>(searchLine, 500);

  // Effect will be triggered when input element change
  // The idea is to search only when the user has not input values in half a second
  // useDebounce Credits & logic from https://usehooks.com/useDebounce/

  useEffect(
    () => {
      if (debouncedsearchLine) {
        setIsSearching(true);
        SearchMovies(debouncedsearchLine).then((results) => {
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedsearchLine]
  );

  return (
    <div>
      <input
        placeholder="Search for Movies"
        onChange={(e) => {
          // Preventing to input only spaces
          if (e.target.value.trim().length > 0) {
            setsearchLine(e.target.value);
          } else {
            setResults([]);
          }
        }}
        className={"movie-finder"}
      />
      {/* 
        While searching is happening a "Searching" text will appear
        Production can have a timeout for a searching spin to appear
      */}
      {isSearching && <div className="info">Searching for movies</div>}
      {results === undefined &&
        <div className="info">Try another search</div>}
      <ResultsList results={results} searchLine={searchLine} />
    </div>
  );
}

export default App;
