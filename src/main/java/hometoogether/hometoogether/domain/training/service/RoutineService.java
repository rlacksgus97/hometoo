package hometoogether.hometoogether.domain.training.service;

import hometoogether.hometoogether.domain.training.Domain.Routine;
import hometoogether.hometoogether.domain.training.Domain.RoutineDto;
import hometoogether.hometoogether.domain.training.Domain.Training;
import hometoogether.hometoogether.domain.training.Domain.TrainingVO;
import hometoogether.hometoogether.domain.training.repository.RoutineRepository;
import hometoogether.hometoogether.domain.training.repository.TrainingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.*;

@Service
@RequiredArgsConstructor
public class RoutineService {
    private final RoutineRepository routineRepository;
    private final TrainingRepository trainingRepository;

    public List<RoutineDto> getRoutines() {
        List<Routine> all = routineRepository.findAll();
        List<RoutineDto> result=new ArrayList<>();

        for(Routine routine : all){

            RoutineDto build = RoutineDto.builder()
                    .routineId(routine.getRoutineId())
                    .routineName(routine.getRoutineName())
                    .userId(routine.getUserId())
                    .build();
            result.add(build);
        }

        return result;
    }

    public List<TrainingVO> getTrainingList(Long routineId) {
        Routine routine = routineRepository.findById(routineId).orElse(null);
        List<Training> trainings = routine.getTrainings();
        List<TrainingVO> trainingVOs=new ArrayList<>();

        for (Training training : trainings) {
            TrainingVO build = TrainingVO.builder()
                    .trainingId(training.getTrainingId())
                    .trainingName(training.getTrainingName())
                    .trainingSec(training.getTrainingSec())
                    .trainingSetCnt(training.getTrainingSetCnt())
                    .build();
            trainingVOs.add(build);
        }

        return trainingVOs;
    }

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
        myRoutine.setRoutineAvgScore(0);
        myRoutine.setEvaluateCnt(0);

        routineRepository.save(myRoutine);

    }

    @Transactional
    public float editRoutineAvgScore(Long routineId, Map<String, String> evaluation){
        Routine routine = routineRepository.findById(routineId).orElse(null);
        Float currentEvaluateScore = Float.valueOf(evaluation.get("evaluateScore"));

        float routineAvgScore = routine.getRoutineAvgScore();
        int evaluateCnt = routine.getEvaluateCnt();

        routineAvgScore=(routineAvgScore*evaluateCnt+currentEvaluateScore)/(evaluateCnt+1);
        routineAvgScore = (float) (Math.floor(routineAvgScore * 100) / 100.0);

        routine.setRoutineAvgScore(routineAvgScore);
        routine.setEvaluateCnt(evaluateCnt+1);

        routineRepository.save(routine);

        return routineAvgScore;
    }

    private Object[] arrayParse(String notParsedString){

        notParsedString=notParsedString.replace("[", "");
        notParsedString=notParsedString.replace("]", "");
        notParsedString=notParsedString.replace(" ", "");

        Object[] parsedString = notParsedString.split(",");
        return parsedString;
    }
}
