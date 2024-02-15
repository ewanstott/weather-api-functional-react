const Search = ({ onInput, onSearchClick }) => {
  //destructuring props in params. Props received from App

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location here"
        className="search"
        onChange={onInput}
      />
      <button onClick={onSearchClick}>Search</button>
    </div>
  );
};

export default Search;

//onInput is a function passed down from App -> updates the 'search' state with userInput
