package hometoogether.hometoogether.domain.challenge.controller;

import hometoogether.hometoogether.domain.challenge.dto.ChallengeDetailResponseDto;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeRequestDto;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeResponseDto;
import hometoogether.hometoogether.domain.challenge.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.IOUtils;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class ChallengeController {

    private final ChallengeService challengeService;

    @PostMapping("/challenges")
    public Long save(ChallengeRequestDto param) throws IOException, ParseException {
        if (param.getType() == "photo"){
            return challengeService.saveChallengePhoto(param);
        }
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
