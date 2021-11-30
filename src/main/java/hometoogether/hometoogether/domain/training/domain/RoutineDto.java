package hometoogether.hometoogether.domain.training.domain;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class RoutineDto {
    private Long routineId;
    private Long userId;
    private String routineName;

    @Builder
    public RoutineDto(Long routineId, Long userId, String routineName) {
        this.routineId=routineId;
        this.userId = userId;
        this.routineName=routineName;
    }

    public Routine toEntity(RoutineDto routineDto) {
//        Routine entity=new Routine();
//        List<Training> trainingList=new ArrayList<>();

//        for (TrainingVO t : routineDto.getTrainings()) {
//            Training training = t.toEntity();
//            trainingList.add(training);
//        }

        return Routine.builder()
                .userId(userId)
                .routineName(routineName)
//                .trainings(trainingList)
                .build();
    }
}
