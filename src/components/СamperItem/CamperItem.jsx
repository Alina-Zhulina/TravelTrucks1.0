import IconsEquipment from "../IconsEquipment/IconsEquipment";

const CamperItem = ({ camper }) => {
  const maxDescriptionLength = 50;
  const displayDescription =
    camper.description.length > maxDescriptionLength
      ? `${camper.description.slice(0, maxDescriptionLength)}...`
      : camper.description;
  return (
    <>
      <img src={camper.gallery && camper.gallery[0]?.thumb} alt={camper.name} />
      <h2>{camper.name}</h2>
      <p>Price: ${camper.price}</p>
      <p>Rating: {camper.rating}</p>
      <p>Location: {camper.location}</p>
      <p>{displayDescription}</p>
      <IconsEquipment equipment={camper} />
    </>
  );
};

export default CamperItem;
