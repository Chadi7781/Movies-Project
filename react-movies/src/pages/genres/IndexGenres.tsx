import { Link } from "react-router-dom";

export default function IndexGenres() {
  return (
    <div>
      <h3> Genres</h3>
      <Link
        to="/genres/create"
        className="btnPrimary"
        style={{ textDecoration: "none" }}
      >
        Create Genre
      </Link>
    </div>
  );
}
