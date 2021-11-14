package hometoogether.hometoogether.domain.pose.controller;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeRequestDto;
import hometoogether.hometoogether.domain.challenge.repository.ChallengeRepository;
import hometoogether.hometoogether.domain.challenge.service.ChallengeService;
import hometoogether.hometoogether.domain.pose.domain.Keypoints;
import hometoogether.hometoogether.domain.pose.service.PoseService;
import hometoogether.hometoogether.domain.trial.service.TrialService;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class PoseController {

    private final ChallengeService challengeService;
    private final TrialService trialService;
    private final PoseService poseService;
    private final ChallengeRepository challengeRepository;

    @PostMapping("/demo/photo")
    public Long test(ChallengeRequestDto param) throws IOException, ParseException {
        return challengeService.saveChallengePhoto(param);
    }

    @GetMapping("/demo/similarity")
    @Transactional
    public double similarity(){
        Challenge challenge1 = challengeRepository.findById(5L)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + 3));

        Challenge challenge2 = challengeRepository.findById(6L)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + 4));

        List<Keypoints> keypointsList1 = challenge1.getChallengePose().getKeypointsList();
        List<Keypoints> keypointsList2 = challenge2.getChallengePose().getKeypointsList();

        double similarity = poseService.DTWDistance(keypointsList1, keypointsList2);

        return similarity;
    }

//    @GetMapping("/pose")
//    public String pose() throws IOException {
//        String result = "";
//        String url = "https://myallinfo.com/wp-content/uploads/2020/12/%EB%A7%A8%EB%AA%B8-%EC%8A%A4%EC%BF%BC%ED%8A%B8-%ED%9A%A8%EA%B3%BC-5%EA%B0%80%EC%A7%80%EC%99%80-%EC%A2%85%EB%A5%98%EB%A5%BC-%EC%95%8C%EB%A0%A4%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.jpg";
//        try{
//            result = poseService.estimatePosetest(url);
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//        return result;
//    }


}
