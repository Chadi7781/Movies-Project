import { Link } from "react-router-dom";

export default function IndexMovie() {
  return (
    <div>
      <h3> Movie</h3>
      <Link
        to="/movie/create"
        className="btnPrimary"
        style={{ textDecoration: "none" }}
      >
        Create Movie
      </Link>
    </div>
  );
}
