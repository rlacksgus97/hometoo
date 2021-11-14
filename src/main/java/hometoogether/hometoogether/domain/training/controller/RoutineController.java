package hometoogether.hometoogether.domain.training.controller;

import hometoogether.hometoogether.domain.training.domain.RoutineDto;
import hometoogether.hometoogether.domain.training.domain.Training;
import hometoogether.hometoogether.domain.training.service.RoutineService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class RoutineController {

    private final RoutineService routineService;

    @GetMapping("/routines/{id}")
    public RoutineDto getRoutineList(@PathVariable("id") Long userId) {
        return routineService.getRoutine(userId);
    }

    @GetMapping("/routines")
    public List<Training> getTraining() {
        return routineService.getTrainingList();
    }

    @PostMapping(value = "/routines/{id}")
    public String updateRoutine(@PathVariable("id") Long userId, @RequestBody RoutineDto params) {
        routineService.saveRoutine(userId, params);
        return "Routine Update Success";
    }


}
