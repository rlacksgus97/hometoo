import * as React from "react";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import { useHistory } from "react-router";

export default function ChallengeCard(props) {
  const history = useHistory();
  const url = "http://221.143.144.143:80/" + props.challenge.url;

  return (
    <Card>
      <CardImg
        alt="Card image cap"
        // src="https://picsum.photos/256/186"
        src={url}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{props.challenge.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.challenge.username}
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardText>
        <div style={{ display: "flex" }}>
          <Button
            color="primary"
            style={{ marginLeft: "auto" }}
            onClick={() => {
              history.push({
                pathname: "/challenge/detail",
                state: { cid: props.challenge.id },
              });
            }}
          >
            참가하기
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
