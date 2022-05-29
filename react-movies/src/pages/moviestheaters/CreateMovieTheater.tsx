import { Link } from "react-router-dom";

export default function CreateMovieTheaters() {
  <>
    <h2>Movie Theaters</h2>

    <Link to="/movietheaters/create" className="btnPrimary">
      Create Movie Theater
    </Link>
  </>;
}
