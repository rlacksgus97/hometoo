package hometoogether.hometoogether.domain.training.controller;

import hometoogether.hometoogether.domain.training.Domain.Routine;
import hometoogether.hometoogether.domain.training.service.RoutineService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class RoutineController {

    private final RoutineService routineService;

    @GetMapping("/routines")
    public List<Routine> getRoutineList() {
        return routineService.getRoutines();
    }

//    @GetMapping("/routine/{id}")
//    public TrainingsDto getTrainings(@PathVariable("id") Long routineId) {
//        List<Training> trainingList = routineService.getTrainingList(routineId);
//        return TrainingsDto.builder()
//                .trainings(trainingList)
//                .routineId(routineId).build();
//    }

    @PostMapping("/routine")
    public void saveRoutine(@RequestBody Map<String, Object> routine) {
        routineService.saveRoutine(routine);
    }
}
