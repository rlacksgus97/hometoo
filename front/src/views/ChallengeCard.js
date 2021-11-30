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

export default function ChallengeCard(props) {
  // 찬현 주소
  const url = "http://221.143.144.143:80/" + props.challenge.url;
  // 태훈 주소
  // const url = "http://58.122.7.167:9000/" + props.challenge.url;

  return (
    <>
      <Card>
        <div>
          {props.challenge.type == "photo" ? (
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
          <CardTitle tag="h5">{props.challenge.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.challenge.username}
          </CardSubtitle>
          <CardText>{props.challenge.context}</CardText>
          <div style={{ display: "flex" }}>
            <Button
              color={props.challenge.type === "photo" ? "success" : "warning"}
              style={{ marginRight: "auto" }}
            >
              {props.challenge.type}
            </Button>
            <Button
              color="primary"
              style={{ marginLeft: "auto" }}
              onClick={() => {
                window.location.href = "/challenge/" + props.challenge.id;
              }}
            >
              참가하기
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
