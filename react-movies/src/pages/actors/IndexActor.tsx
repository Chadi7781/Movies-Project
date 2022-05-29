import { Link } from "react-router-dom";

export default function IndexActor() {
  <>
    <h2>Index Actors</h2>

    <Link
      to="/actor/create"
      className="btnPrimary"
      style={{ textDecoration: "none" }}
    >
      Create Actors
    </Link>
  </>;
}
