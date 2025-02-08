import IconsEquipment from "../IconsEquipment/IconsEquipment";
import icons from "../../img/svg/icons.svg";
import css from "./CamperItem.module.css";
import { toggleFavorite } from "../../redux/campers/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors";
import { useNavigate } from "react-router-dom";

const CamperItem = ({ camper }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(camper.id);

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
            <span className={css.camperPrice}>{`€${camper.price?.toFixed(
              2
            )}`}</span>
            <button
              className={`${css.addToFavorites} ${
                isFavorite ? css.favoriteActive : ""
              }`}
              onClick={handleFavoriteClick}
            >
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
        <button className={css.showMore} onClick={handleShowMoreClick}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default CamperItem;
