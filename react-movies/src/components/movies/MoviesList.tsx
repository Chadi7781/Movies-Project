import React from 'react'
import { movieDTO } from '../../model/movies.model'
import Loading from '../utils/Loading/Loading';
import IndividualMovie from './IndividualMovie'


import css from './MoviesList.module.css';

export default function MoviesList( props: moviesListProps) {
 if(!props.movies) {
     return <Loading/>
 }
 else if (props.movies.length ===0) {
    return <>There is no moviesto display.</>
 }
 else {
    return (
        <div  className={css.div}>
    
            {props.movies.map(movies => <IndividualMovie {...movies} key={movies.id}/>)}
        </div>
      )
 }
}


interface moviesListProps {
    movies?: movieDTO[]
}

