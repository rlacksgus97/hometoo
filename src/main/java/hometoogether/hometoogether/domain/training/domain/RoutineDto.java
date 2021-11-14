package hometoogether.hometoogether.domain.training.domain;

import lombok.Builder;
import lombok.Getter;

import java.util.LinkedList;
import java.util.List;

@Getter
public class RoutineDto {
    private Long userId;
    private List<TrainingVO> trainings;
//    private List<Routine> routineDtoList;

    //    @Builder
//    public RoutineDto(List<Routine> routineDtoList) {
//        this.routineDtoList = routineDtoList;
//    }
    @Builder
    public RoutineDto(Long userId, List<TrainingVO> trainings) {
        this.userId = userId;
        this.trainings = trainings;
    }

    public List<Routine> toEntity(RoutineDto routineDto) {
        List<Routine> entities = new LinkedList<>();

        for (TrainingVO t : routineDto.getTrainings()) {
            Routine routine = Routine.builder()
                    .userId(userId)
                    .seq(t.getSeq())
                    .trainingName(t.getTrainingName())
                    .trainingId(t.getTrainingId())
                    .build();
            entities.add(routine);
        }

        return entities;
    }
}
