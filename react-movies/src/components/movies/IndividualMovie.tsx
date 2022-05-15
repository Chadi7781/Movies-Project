import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { movieDTO } from "../../model/movies.model";

import css from "./IndividualMovie.module.css";

export default function IndividualMovie(props: movieDTO) {
  const buildLink = () => `/movie/${props.id}`;
  return (
    <CardGroup className={css.div}>
      <Card>
        <a href={buildLink()}>
          <CardImg alt="image" src={props.poster} top width="100%" />
        </a>

        <CardBody>
          <CardTitle tag="h5">
            <a href={buildLink()}>{props.title}</a>
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.category}
          </CardSubtitle>
          <CardText>The story begin when a ...</CardText>
          <Button color="primary">Read More</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
}
