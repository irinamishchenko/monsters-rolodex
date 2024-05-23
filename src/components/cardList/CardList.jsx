import PropTypes from "prop-types";
import CardItem from "../cardItem/CardItem";
import "./cardList.css";

const CardList = ({ monsters }) => {
  return (
    <ul className="card-list">
      {monsters.map((monster) => {
        return <CardItem key={monster.id} monster={monster} />;
      })}
    </ul>
  );
};

CardList.propTypes = {
  monsters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
