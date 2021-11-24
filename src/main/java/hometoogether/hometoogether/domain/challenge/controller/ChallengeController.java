package hometoogether.hometoogether.domain.challenge.controller;

import hometoogether.hometoogether.domain.challenge.dto.ChallengeDetailResponseDto;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeRequestDto;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeResponseDto;
import hometoogether.hometoogether.domain.challenge.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.jcodec.api.JCodecException;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class ChallengeController {

    private final ChallengeService challengeService;

    @PostMapping("/challenges")
    public Long save(ChallengeRequestDto param) throws IOException, ParseException, JCodecException, InterruptedException {
        System.out.println("param.getType() = " + param.getType());
        if ("photo".equals(param.getType())){
            System.out.println("HI IM HERE");
            return challengeService.saveChallengePhoto(param);
        }
        System.out.println("NO IM THERE");
        return challengeService.saveChallengeVideo(param);
    }

    @GetMapping("/challenges/{id}")
    public ChallengeDetailResponseDto getDetail(@PathVariable("id") Long challengeId) {
        return challengeService.getChallenge(challengeId);
    }

    @GetMapping("/challenges")
    public List<ChallengeResponseDto> getList(){
        return challengeService.getChallengeList();
    }

    @PutMapping("/challenges/{id}")
    public Long update(@PathVariable("id") Long challengeId, ChallengeRequestDto param){
        return challengeService.updateChallenge(challengeId, param);
    }

    @DeleteMapping("/challenges/{id}")
    public Long delete(@PathVariable("id") Long challengeId){
        return challengeService.deleteChallenge(challengeId);
    }
}
