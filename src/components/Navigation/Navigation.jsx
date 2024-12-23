import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div>
        <Link to="/">TravelTracks</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
