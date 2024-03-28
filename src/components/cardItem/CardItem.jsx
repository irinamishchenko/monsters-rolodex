import "./cardItem.css";

const CardItem = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <li key={id} className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};

export default CardItem;
