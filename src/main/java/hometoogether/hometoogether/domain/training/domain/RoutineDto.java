package hometoogether.hometoogether.domain.training.domain;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class RoutineDto {
    private Long routineId;
    private String userName;
    private String routineName;

    @Builder
    public RoutineDto(Long routineId, String userName, String routineName) {
        this.routineId=routineId;
        this.userName = userName;
        this.routineName=routineName;
    }

//    public Routine toEntity(RoutineDto routineDto) {
////        Routine entity=new Routine();
////        List<Training> trainingList=new ArrayList<>();
//
////        for (TrainingVO t : routineDto.getTrainings()) {
////            Training training = t.toEntity();
////            trainingList.add(training);
////        }
//
//        return Routine.builder()
//                .user(user)
//                .routineName(routineName)
////                .trainings(trainingList)
//                .build();
//    }
}
