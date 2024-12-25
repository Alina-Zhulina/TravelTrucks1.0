import { Link } from "react-router-dom";
import icons from "../../img/svg/icons.svg";
import css from "./Navigation.module.css";
import NavItem from "../../NavLink/NavLink";

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <div>
        <Link to="/">
          <svg className={css.logoIcon}>
            <use href={`${icons}#icon-Logo`}></use>
          </svg>
        </Link>
      </div>
      <ul className={css.navlist}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/catalog">Catalog</NavItem>
      </ul>
    </nav>
  );
};

export default Navigation;
