import React from "react";
import { movieDTO } from "../../model/movies.model";
import Loading from "../utils/Loading/Loading";
import GenericList from "./genericlist/GenericList";
import IndividualMovie from "./IndividualMovie";

import css from "./MoviesList.module.css";

export default function MoviesList(props: moviesListProps) {
  return (
    <GenericList list={props.movies}>
      <div className={css.div}>
        {props.movies?.map((movies) => (
          <IndividualMovie {...movies} key={movies.id} />
        ))}
      </div>
    </GenericList>
  );

  // chadi troudi la vie est un jeu et la mort gagne
}

interface moviesListProps {
  movies?: movieDTO[];
}
