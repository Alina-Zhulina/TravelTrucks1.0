import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const goToCatalog = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.pageHome}>
      <div>
        <h1 className={css.titleHomePage}>Campers of your dreams</h1>
        <p className={css.descriptionHomePage}>
          You can find everything you want in our catalog
        </p>
      </div>

      <Button onClick={goToCatalog} className={css.btnViewNow}>
        View Now
      </Button>
    </div>
  );
};

export default HomePage;
