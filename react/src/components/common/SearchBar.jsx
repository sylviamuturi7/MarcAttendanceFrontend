function SearchBar({ value, onChange }) {
  return (
    <search>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        className="searchbar"
        aria-label="Search"
      />
    </search>
  );
}

export default SearchBar;
