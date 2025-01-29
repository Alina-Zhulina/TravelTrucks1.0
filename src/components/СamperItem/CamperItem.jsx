import IconsEquipment from "../IconsEquipment/IconsEquipment";
import icons from "../../img/svg/icons.svg";
import css from "./CamperItem.module.css";

const CamperItem = ({ camper }) => {
  const maxDescriptionLength = 69;
  const displayDescription =
    camper.description.length > maxDescriptionLength
      ? `${camper.description.slice(0, maxDescriptionLength)}...`
      : camper.description;

  return (
    <div className={css.camperItem}>
      <img
        src={camper.gallery && camper.gallery[0]?.thumb}
        alt={camper.name}
        // width="292px"
        className={css.camperImage}
      />

      <div className={css.camperContent}>
        <div className={css.camperHeader}>
          <h2 className={css.camperName}>{camper.name}</h2>
          <div className={css.priceFafourite}>
            <p className={css.camperPrice}>${camper.price}</p>
            <button className={css.addToFavorites}>
              <svg width={25} height={24}>
                <use href={`${icons}#icon-Property-1Default`} />
              </svg>
            </button>
          </div>
        </div>

        <div className={css.camperRatingLocation}>
          <div className={css.rating}>
            <svg width={20} height={20} className={css.ratingIcon}>
              <use href={`${icons}#icon-Property-1Default-1`} />
            </svg>
            {camper.rating} ({camper.reviews.length} Reviews)
          </div>

          <div className={css.location}>
            <svg width={20} height={20}>
              <use href={`${icons}#icon-Map`} />
            </svg>
            {camper.location}
          </div>
        </div>

        <p className={css.description}>{displayDescription}</p>
        <div className={css.iconsSpacing}>
          <IconsEquipment equipment={camper} />
        </div>
        <button className={css.showMore}>Show More</button>
      </div>
    </div>
  );
};

export default CamperItem;
