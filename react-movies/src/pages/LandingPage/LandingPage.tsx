import { useEffect, useState } from "react";
import { Badge, Row } from "reactstrap";
import Carousel from "../../components/carousel/Carousel";
import IndividualMovie from "../../components/movies/IndividualMovie";
import MoviesList from "../../components/movies/MoviesList";
import { landingPageDTO } from "../../model/movies.model";
import "./LandingPage.module.scss";
export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "spiderman",
            category: "adventure",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 2,
            title: "spiderman",
            category: "adventure",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 3,
            title: "spiderman",
            category: "adventure",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 4,
            title: "spiderman",
            category: "adventure",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
        ],

        upcomingReleases: [
          {
            id: 5,
            title: "spiderman",
            category: "adventure",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
  });
  return (
    <>
      <div>
        <section>
          <h1>
            Take control of your<div>customer support</div>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="cta">
            <button>Get started</button>
            <button>Live demo</button>
          </div>
        </section>

        <Row style={{ padding: "30px 30px 30px 30px" }}>
          <Badge color="danger">
            <h3> In Theaters</h3>
          </Badge>
        </Row>
        <MoviesList movies={movies.inTheaters} />
      </div>

      <div>
        <Row style={{ padding: "30px 30px 30px 30px" }}>
          <Badge color="success">
            <h3> Upcoming Releases</h3>
          </Badge>
        </Row>
        <MoviesList movies={movies.upcomingReleases} />
      </div>
    </>
  );
}
