import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};

export default Header;
