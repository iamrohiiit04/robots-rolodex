import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box {placeholder}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
