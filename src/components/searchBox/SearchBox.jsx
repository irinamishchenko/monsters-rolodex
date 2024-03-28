import "./searchBox.css";

const SearchBox = ({ onChange, placeholder, className }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

export default SearchBox;
