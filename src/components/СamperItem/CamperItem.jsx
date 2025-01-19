import IconsEquipment from "../IconsEquipment/IconsEquipment";
import icons from "../../img/svg/icons.svg";
import css from "./CamperItem.module.css";

const CamperItem = ({ camper }) => {
  const maxDescriptionLength = 50;
  const displayDescription =
    camper.description.length > maxDescriptionLength
      ? `${camper.description.slice(0, maxDescriptionLength)}...`
      : camper.description;

  return (
    <div className={css.camperItem}>
      <img
        src={camper.gallery && camper.gallery[0]?.thumb}
        alt={camper.name}
        width="292px"
        className={css.camperImage}
      />

      <div className={css.camperHeader}>
        <h2 className={css.camperName}>{camper.name}</h2>
        <p className={css.camperPrice}>${camper.price}</p>
        <button className={css.addToFavorites}>
          <svg>
            <use href={`${icons}#icon-Property-1Default`} />
          </svg>
        </button>
      </div>
      <div className={css.camperRatingLocation}>
        <div className={css.rating}>
          <svg className={css.ratingIcon}>
            <use href={`${icons}#icon-Property-1Default-1`} />
          </svg>
          {camper.rating} ({camper.reviews.length} Reviews)
        </div>

        <div className={css.location}>
          <svg>
            <use href={`${icons}#icon-Map`} />
          </svg>
          {camper.location}
        </div>
      </div>

      <p className={css.description}>{displayDescription}</p>

      <IconsEquipment equipment={camper} />

      <button className={css.showMore}>Show More</button>
    </div>
  );
};

export default CamperItem;
