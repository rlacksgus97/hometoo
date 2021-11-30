import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

function RoutineCard(props){

    return(
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h4" >{props.num}. {props.routine.routineName}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        루틴 평점: {props.routine.routineAvgScore}
                    </CardSubtitle>
                    <CardText>평가받은 횟수: {props.routine.evaluateCnt}</CardText>
                    {/*<CardText>아래 버튼을 클릭하면 루틴 상세정보를 볼 수 있습니다.</CardText>*/}
                    <div style={{ display: "flex" }}>
                        <Button
                            color="primary"
                            style={{ margin: "auto" }}
                            onClick={() => {
                                window.location.href="/room/create/routine/"+props.routine.routineId;
                            }}
                        >
                            상세 정보
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default React.memo(RoutineCard)