const Search = ({ onInput, onSearchClick, inputRef, focus }) => {
  //destructuring props in params. Props received from App

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter location here"
        className="search"
        onChange={onInput}
      />
      <button onClick={onSearchClick}>Search</button>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default Search;

//onInput is a function passed down from App -> updates the 'search' state with userInput
