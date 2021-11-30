package hometoogether.hometoogether.domain.trial.controller;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.challenge.repository.ChallengeRepository;
import hometoogether.hometoogether.domain.trial.dto.TrialRequestDto;
import hometoogether.hometoogether.domain.trial.dto.TrialResponseDto;
import hometoogether.hometoogether.domain.trial.service.TrialService;
import lombok.RequiredArgsConstructor;
import org.jcodec.api.JCodecException;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;

@RequestMapping("/api")
@RequiredArgsConstructor
@RestController
public class TrialController {

    private final TrialService trialService;
    private final ChallengeRepository challengeRepository;

    @Transactional
    @PostMapping("/challenges/{challengeId}/trials")
    public Long save(@PathVariable("challengeId") Long challengeId, TrialRequestDto param) throws IOException, ParseException, JCodecException {
        return trialService.save(challengeId, param);
    }

    @GetMapping("/challenges/{challengeId}/trials/{trialId}/estimate")
    public double estimate(@PathVariable("challengeId") Long challengeId, @PathVariable("trialId") Long trialId){
        return trialService.runSimilarity(challengeId, trialId);
    }

    @GetMapping("/challenges/{challengeId}/best_trials")
    public List<TrialResponseDto> getBestTrialList(@PathVariable("challengeId") Long challengeId){
        return trialService.getBestTrials(challengeId);
    }

    @GetMapping("/challenges/{challengeId}/trials/{trialid}")
    public TrialResponseDto getDetail(@PathVariable("trialid") Long trialId){
        return trialService.getTrial(trialId);
    }

    @GetMapping("/challenges/{challengeId}/trials")
    public List<TrialResponseDto> getList(@PathVariable("challengeId") Long challengeId){
        return trialService.getTrialList(challengeId);
    }

    @DeleteMapping("/challenges/{challengeId}/trials/{trialid}")
    public Long delete(@PathVariable("trialid") Long trialId){
        return trialService.deleteTrial(trialId);
    }
}
