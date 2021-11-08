package hometoogether.hometoogether.domain.trial.service;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.challenge.repository.ChallengeRepository;
import hometoogether.hometoogether.domain.pose.domain.TrialPose;
import hometoogether.hometoogether.domain.pose.repository.TrialPoseRepository;
import hometoogether.hometoogether.domain.pose.service.PoseService;
import hometoogether.hometoogether.domain.trial.domain.Trial;
import hometoogether.hometoogether.domain.trial.dto.TrialRequestDto;
import hometoogether.hometoogether.domain.trial.dto.TrialResponseDto;
import hometoogether.hometoogether.domain.trial.repository.TrialRepository;
import hometoogether.hometoogether.domain.user.domain.User;
import hometoogether.hometoogether.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TrialService {

    private final UserRepository userRepository;
    private final TrialRepository trialRepository;
    private final ChallengeRepository challengeRepository;
    private final TrialPoseRepository trialPoseRepository;
    private final PoseService poseService;

    @Transactional
    public Long saveTrial(Long challengeId, TrialRequestDto trialRequestDto) throws IOException, ParseException {
        // parameter로 SessionUser 받아오게 구현 예정

        //TrialPose 생성
        //url, poseInfoList, user
        MultipartFile multipartFile = trialRequestDto.getFile();
        String url = UUID.randomUUID().toString() + "_" + multipartFile.getOriginalFilename();
        File file = new File(url);
        multipartFile.transferTo(file);

        User user = userRepository.findByUsername(trialRequestDto.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 없습니다. username=" + trialRequestDto.getUsername()));

        TrialPose trialPose = TrialPose.builder()
                .url(url)
                .user(user)
                .build();

        trialPoseRepository.save(trialPose);

        poseService.estimatePoseVideo(trialPose.getId(), url, "trial");

        //User <-> ChallengePose 매핑
        user.addTrialPose(trialPose);

        //Trial 생성
        Trial trial = Trial.builder()
                .trialPose(trialPose)
                .build();

        //trialPose <-> trial 상호 매핑
        trialPose.setTrial(trial);

        //Trial <-> Challenge 상호 매핑
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + challengeId));
        challenge.addTrial(trial);

        trial.setChallenge(challenge);

        return challengeRepository.save(challenge).getId();
    }

//    public double runSimilarity(Long trialId){
//        Trial trial = trialRepository.findById(trialId)
//                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + trialId));
//
//        Challenge challenge = trial.getChallenge();
//
//        List<PoseInfo> poseInfoList1 = challenge.getChallengePose().getPoseInfoList();
//        List<PoseInfo> poseInfoList2 = trial.getTrialPose().getPoseInfoList();
//
//        return 1;
//    }

    public TrialResponseDto getTrial(Long trialId) {
        Trial trial = trialRepository.findById(trialId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + trialId));
        return new TrialResponseDto(trial);
    }

    public List<TrialResponseDto> getTrialList() {
        Sort sort = Sort.by(Sort.Direction.DESC, "create_date");
        List<Trial> trials = trialRepository.findAll(sort);
        return trials.stream().map(TrialResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public Long deleteTrial(Long trialId) {
        Trial trial = trialRepository.findById(trialId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + trialId));
        trialRepository.delete(trial);
        return trialId;
    }
}
