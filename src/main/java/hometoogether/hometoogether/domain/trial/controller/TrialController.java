package hometoogether.hometoogether.domain.trial.controller;

import hometoogether.hometoogether.domain.trial.dto.TrialRequestDto;
import hometoogether.hometoogether.domain.trial.dto.TrialResponseDto;
import hometoogether.hometoogether.domain.trial.service.TrialService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class TrialController {

    private final TrialService trialService;

    @PostMapping("/challenges/{challengeId}/trials/")
    public Long save(@PathVariable("id") Long challengeId, TrialRequestDto param) throws IOException {
        return trialService.saveTrial(challengeId, param);
    }

    @PostMapping("/trials/{trialId}")
    public double estimate(@PathVariable("trialId") Long trialId){
        return trialService.runSimilarity(trialId);
    }

    @GetMapping("/trials/{id}")
    public TrialResponseDto getDetail(@PathVariable("id") Long trialId){
        return trialService.getTrial(trialId);
    }

    @GetMapping("/trials")
    public List<TrialResponseDto> getList(){
        return trialService.getTrialList();
    }

    @DeleteMapping("/trials/{id}")
    public Long delete(@PathVariable("id") Long trialId){
        return trialService.deleteTrial(trialId);
    }
}
