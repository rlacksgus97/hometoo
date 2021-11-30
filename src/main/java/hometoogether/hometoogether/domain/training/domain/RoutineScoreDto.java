package hometoogether.hometoogether.domain.training.domain;

import lombok.Builder;
import lombok.Data;

@Data
public class RoutineScoreDto {
    private Long routineId;
    private Long userId;
    private String routineName;
    private float routineAvgScore;
    private int evaluateCnt;

    @Builder
    public RoutineScoreDto(Long routineId, Long userId, String routineName, float routineAvgScore, int evaluateCnt) {
        this.routineId=routineId;
        this.userId = userId;
        this.routineName=routineName;
        this.routineAvgScore=routineAvgScore;
        this.evaluateCnt=evaluateCnt;
    }

    public Routine toEntity(RoutineScoreDto routineScoreDto) {

        return Routine.builder()
                .userId(routineScoreDto.userId)
                .routineName(routineScoreDto.routineName)
                .routineAvgScore(routineScoreDto.routineAvgScore)
                .evaluateCnt(routineScoreDto.evaluateCnt)
                .build();
    }
}
