package hometoogether.hometoogether.domain.training.service;

import hometoogether.hometoogether.domain.training.Domain.Routine;
import hometoogether.hometoogether.domain.training.Domain.Training;
import hometoogether.hometoogether.domain.training.repository.RoutineRepository;
import hometoogether.hometoogether.domain.training.repository.TrainingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@RequiredArgsConstructor
public class RoutineService {
    private final RoutineRepository routineRepository;
    private final TrainingRepository trainingRepository;

    public List<Routine> getRoutines() {
        List<Routine> all = routineRepository.findAll();
        return all;

    }

//    public List<Training> getTrainingList(Long routineId) {
//        Routine routine = routineRepository.findById(routineId).orElse(null);
//        return routine.getTrainings();
//    }

    @Transactional
    public void saveRoutine(Map<String, Object> routine) {
        List<Training> trainings=new ArrayList<>();
        Routine myRoutine=new Routine();

        String routineName = routine.get("routineName").toString();

        String trainingName = routine.get("trainingName").toString();
        String trainingSec = routine.get("trainingSec").toString();
        String trainingSetCnt = routine.get("trainingSetCnt").toString();
        String trainingSeq = routine.get("seq").toString();

        String[] nameArray = (String[]) arrayParse(trainingName);
        String[] secArray = (String[]) arrayParse(trainingSec);
        String[] setCntArray = (String[]) arrayParse(trainingSetCnt);
        String[] seqArray = (String[]) arrayParse(trainingSeq);

        for(int i=0;i<nameArray.length;i++){
            Training training = Training.builder()
                    .trainingName(nameArray[i])
                    .trainingSec(Integer.valueOf(secArray[i]))
                    .trainingSetCnt(Integer.valueOf(setCntArray[i]))
                    .seq(Integer.valueOf(seqArray[i])).build();

            trainings.add(training);
            trainingRepository.save(training);
        }
        myRoutine.setTrainings(trainings);
        myRoutine.setRoutineName(routineName);
        myRoutine.setUserId(10L); // 임의로 유저 아이디 지정. 추후에 바꿀것임
        routineRepository.save(myRoutine);

    }

    private Object[] arrayParse(String notParsedString){

        notParsedString=notParsedString.replace("[", "");
        notParsedString=notParsedString.replace("]", "");
        notParsedString=notParsedString.replace(" ", "");

        Object[] parsedString = notParsedString.split(",");
        return parsedString;
    }
}
