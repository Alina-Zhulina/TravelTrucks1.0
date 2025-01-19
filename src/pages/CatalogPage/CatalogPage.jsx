import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import CamperList from "../../components/CampersList/CampersList";
import { selectIsLoading } from "../../redux/campers/selectors";

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return <div>{isLoading ? <Loader /> : <CamperList />}</div>;
};

export default CatalogPage;
