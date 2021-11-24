package hometoogether.hometoogether.domain.trial.controller;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeDetailResponseDto;
import hometoogether.hometoogether.domain.challenge.repository.ChallengeRepository;
import hometoogether.hometoogether.domain.challenge.service.ChallengeService;
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

@RequiredArgsConstructor
@RestController
public class TrialController {

    private final TrialService trialService;
    private final ChallengeRepository challengeRepository;

    @Transactional
    @PostMapping("/challenges/{challengeId}/trials")
    public Long save(@PathVariable("challengeId") Long challengeId, TrialRequestDto param) throws IOException, ParseException, JCodecException {
        Challenge challenge = challengeRepository.getById(challengeId);
        if ("photo".equals(challenge.getType())){
            return trialService.saveTrialPhoto(challengeId, param);
        }
        return trialService.saveTrialVideo(challengeId, param);
    }

    @GetMapping("/challenges/{challengeId}/trials/{trialId}/estimate")
    public double estimate(@PathVariable("challengeId") Long challengeId, @PathVariable("trialId") Long trialId){
        return trialService.runSimilarity(challengeId, trialId);
    }

    @GetMapping("/challenges/{challengeId}/trials/{id}")
    public TrialResponseDto getDetail(@PathVariable("id") Long trialId){
        return trialService.getTrial(trialId);
    }

    @GetMapping("/challenges/{challengeId}/trials")
    public List<TrialResponseDto> getList(){
        return trialService.getTrialList();
    }

    @DeleteMapping("/challenges/{challengeId}/trials/{id}")
    public Long delete(@PathVariable("id") Long trialId){
        return trialService.deleteTrial(trialId);
    }
}
