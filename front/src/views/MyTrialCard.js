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

export default function MyTrialCard(props) {
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
                    {props.trial.username} {props.trial.score}점
                </CardSubtitle>
                <div style={{ display: "flex" }}>
                    <Button
                        color="primary"
                        style={{ marginLeft: "auto" }}
                        onClick={() => {
                            window.location.href = "/score/" + props.trial.id;
                        }}
                    >
                        점수 확인하기
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}