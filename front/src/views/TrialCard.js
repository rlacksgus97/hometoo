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

export default function TrialCard(props) {
  const history = useHistory();
  const url = "http://221.143.144.143:80/" + props.trial.url;

  return (
    <Card>
      <div>
        {props.trial.type == "photo" ? (
          <CardImg
            alt="Card image cap"
            // src="https://picsum.photos/256/186"
            src={url}
            top
            width="100%"
          />
        ) : (
          <video
            src={url}
            crossOrigin="anonymous"
            type="type/mp4"
            controls
            width="100%"
          >
            비디오 재생 중 에러가 발생했습니다.
          </video>
        )}
      </div>
      <CardBody>
        <CardTitle tag="h5">{props.trial.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.trial.username}
        </CardSubtitle>
        <div style={{ display: "flex" }}>
          <Button
            color="primary"
            style={{ marginLeft: "auto" }}
            onClick={() => {
              history.push({
                pathname: "/trial/detail",
                state: { tid: props.trial.id },
              });
            }}
          >
            자세히 보기
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
