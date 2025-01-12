import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import CamperItem from "../../components/СamperItem/CamperItem";

const CatalogPage = () => {
  // Підключення до стану через селектори
  const campers = useSelector((state) => state.campers.items.items);
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);

  // Підключення dispatch для виклику асинхронної дії
  const dispatch = useDispatch();

  // Викликаємо асинхронну дію для отримання даних при завантаженні компонента
  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Catalog</h1>
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

export default CatalogPage;
