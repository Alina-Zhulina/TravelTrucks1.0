import Loader from "../../components/Loader/Loader";
import Details from "../../Details/Details";
import { selectIsLoading } from "../../redux/campers/selectors";

const CamperDetailPage = () => {
  return <div>{selectIsLoading ? <Loader /> : <Details />}</div>;
};
export default CamperDetailPage;
