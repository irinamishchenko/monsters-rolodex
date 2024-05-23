import PropTypes from "prop-types";
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

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchBox;
