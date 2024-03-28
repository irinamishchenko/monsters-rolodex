import CardItem from "../cardItem/CardItem";
import "./cardList.css";

const CardList = ({ monsters }) => {
  return (
    <ul className="card-list">
      {monsters.map((monster) => {
        return <CardItem monster={monster} />;
      })}
    </ul>
  );
};

export default CardList;
