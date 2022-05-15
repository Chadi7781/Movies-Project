import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "reactstrap";
import "./App.css";
import Carousel from "./components/carousel/Carousel";
import IndividualMovie from "./components/movies/IndividualMovie";
import MoviesList from "./components/movies/MoviesList";
import { landingPageDTO, movieDTO } from "./model/movies.model";

export function App() {
  const [hide, setHide] = useState(false);

  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 5,
            title: "spiderman",
            category: "adventure",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },

          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 6,
            title: "Luca",
            category: "comic",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
          {
            id: 7,
            title: "Soul",
            category: "open world",

            poster:
              "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
          },
        ],
        upcomingReleases: [
          {
            id: 8,
            title: "Awled moufida",
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
      <Carousel />

      <div>
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
