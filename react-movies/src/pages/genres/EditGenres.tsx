import { Link } from "react-router-dom";

export default function EditGenres() {
  <>
    <h2>Create Genres</h2>

    <Link to="/genres/edit" className="btnPrimary">
      Edit Genres
    </Link>
  </>;
}
