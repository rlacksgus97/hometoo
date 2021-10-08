package hometoogether.hometoogether.domain.trial.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.challenge.repository.ChallengeRepository;
import hometoogether.hometoogether.domain.pose.domain.PoseInfo;
import hometoogether.hometoogether.domain.pose.domain.TrialPose;
import hometoogether.hometoogether.domain.pose.service.PoseService;
import hometoogether.hometoogether.domain.trial.domain.Trial;
import hometoogether.hometoogether.domain.trial.dto.TrialRequestDto;
import hometoogether.hometoogether.domain.trial.dto.TrialResponseDto;
import hometoogether.hometoogether.domain.trial.repository.TrialRepository;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TrialService {

    private final TrialRepository trialRepository;
    private final ChallengeRepository challengeRepository;
    private final PoseService poseService;

    @Transactional
    public Long saveTrial(TrialRequestDto trialRequestDto) throws JsonProcessingException {
        // parameter로 SessionUser 받아오게 구현 예정
        // parameter로 challengeId 받아오게 구현 예정

        //TrialPose 생성
        //url, poseInfo, user
        String url = trialRequestDto.getUrl();
        PoseInfo poseInfo = poseService.estimatePose(url);
        User user = new User();

        TrialPose trialPose = TrialPose.builder()
                .url(url)
                .poseInfo(poseInfo)
                .user(user)
                .build();

        //trialPose <-> (poseInfo, user) 상호 매핑
        poseInfo.setPose(trialPose);
        List<TrialPose> trialPoseList = user.getTrialPoseList();
        trialPoseList.add(trialPose);
        user.setTrialPoseList(trialPoseList);

        //Trial 생성
        Trial trial = Trial.builder()
                .trialPose(trialPose)
                .build();

        //trialPose <-> trial 상호 매핑
        trialPose.setTrial(trial);

        //Trial <-> Challenge 상호 매핑
        Long challengeId = 1L;
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + challengeId));
        List<Trial> trialList = challenge.getTrialList();
        trialList.add(trial);
        challenge.setTrialList(trialList);

        trial.setChallenge(challenge);

        return challengeRepository.save(challenge).getId();
    }

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
