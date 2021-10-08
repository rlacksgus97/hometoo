package hometoogether.hometoogether.domain.challenge.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeRequestDto;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeResponseDto;
import hometoogether.hometoogether.domain.challenge.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class ChallengeController {

    private final ChallengeService challengeService;

    @PostMapping("/challenges/")
    public Long save(@RequestBody ChallengeRequestDto param) throws JsonProcessingException {
        return challengeService.saveChallenge(param);
    }

    @GetMapping("/challenges/{id}")
    public ChallengeResponseDto getDetail(@PathVariable("id") Long challengeId){
        return challengeService.getChallenge(challengeId);
    }

    @GetMapping("/challenges")
    public List<ChallengeResponseDto> getList(){
        return challengeService.getChallengeList();
    }

    @PutMapping("/challenges/{id}")
    public Long update(@PathVariable("id") Long challengeId, @RequestBody ChallengeRequestDto param){
        return challengeService.updateChallenge(challengeId, param);
    }

    @DeleteMapping("/challenges/{id}")
    public Long delete(@PathVariable("id") Long challengeId){
        return challengeService.deleteChallenge(challengeId);
    }
}
