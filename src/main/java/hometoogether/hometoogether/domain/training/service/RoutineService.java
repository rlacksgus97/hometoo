package hometoogether.hometoogether.domain.training.service;

import hometoogether.hometoogether.domain.training.domain.Routine;
import hometoogether.hometoogether.domain.training.domain.RoutineDto;
import hometoogether.hometoogether.domain.training.domain.Training;
import hometoogether.hometoogether.domain.training.domain.TrainingVO;
import hometoogether.hometoogether.domain.training.repository.RoutineRepository;
import hometoogether.hometoogether.domain.training.repository.TrainingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoutineService {
    private final RoutineRepository routineRepository;
    private final TrainingRepository trainingRepository;

    // 루틴을 개인이 계속 업데이트 하는게 아니라 화상채팅하기전에
    // 단순 등록하는 형식이라면, update할때 delete -> save하는게 낫다

    public RoutineDto getRoutine(Long userId) {
        List<Routine> routines = routineRepository.findAllByUserId(userId);
        // seq 기반 sort
        routines.sort(Comparator.comparing((Routine r) -> r.getSeq()));
        List<TrainingVO> trainings = new LinkedList<>();
        for (Routine r : routines) {
            trainings.add(new TrainingVO(r.getTrainingId(), r.getTrainingName(), r.getSeq()));
        }
        return new RoutineDto(userId, trainings);
    }

    public List<Training> getTrainingList() {
        return trainingRepository.findAll();
    }

    @Transactional
    public void saveRoutine(Long userId, RoutineDto routineDto) {
        Optional<List<Routine>> routines = Optional.ofNullable(routineRepository.findAllByUserId(userId));
        if (routines.isPresent()) {
            routineRepository.deleteAll(routines.get());
        }
//            for (int i = 0; i < routineDto.getTrainings().size(); i++) {
//                routineRepository.save(routineDto.);
//            }
        List<Routine> entities = routineDto.toEntity(routineDto);
        for (Routine r : entities) {
            routineRepository.save(r);
        }


//        List<Routine> routineList = new LinkedList<>();
//        for (int i = 0; i < routineDto.getRoutineDtoList().size(); i++) {
//            routineList.add(routineDto.getRoutineDtoList().get(i));
//        }

//        return routineList;
    }

}
