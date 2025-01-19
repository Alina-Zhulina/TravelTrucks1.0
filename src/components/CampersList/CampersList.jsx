import { useEffect } from "react";
import css from "./CampersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import CamperItem from "../СamperItem/CamperItem";
import { selectCampers, selectIsError } from "../../redux/campers/selectors";

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const error = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!campers.length) {
      dispatch(getCampers());
    }
  }, [dispatch, campers.length]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={css.wrapperCampers}>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperList;
