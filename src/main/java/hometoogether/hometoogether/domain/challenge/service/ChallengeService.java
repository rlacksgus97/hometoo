package hometoogether.hometoogether.domain.challenge.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeRequestDto;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeResponseDto;
import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.challenge.repository.ChallengeRepository;
import hometoogether.hometoogether.domain.pose.domain.ChallengePose;
import hometoogether.hometoogether.domain.pose.domain.PoseInfo;
import hometoogether.hometoogether.domain.pose.service.PoseService;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChallengeService {

    private final ChallengeRepository challengeRepository;
    private final PoseService poseService;

    @Transactional
    public Long saveChallenge(ChallengeRequestDto challengeRequestDto) throws JsonProcessingException {
        // parameter로 SessionUser 받아오게 구현 예정

        //ChallengePose 생성
        //url, poseInfo, user
        String url = challengeRequestDto.getUrl();
        PoseInfo poseInfo = poseService.estimatePose(url);
        User user = new User();

        ChallengePose challengePose = ChallengePose.builder()
                .url(url)
                .poseInfo(poseInfo)
                .user(user)
                .build();

        //challengePose <-> (poseInfo, user) 상호 매핑
        poseInfo.setPose(challengePose);
        List<ChallengePose> challengePoseList = user.getChallengePoseList();
        challengePoseList.add(challengePose);
        user.setChallengePoseList(challengePoseList);

        //Challenge 생성
        Challenge challenge = Challenge.builder()
                .challengePose(challengePose)
                .title(challengeRequestDto.getTitle())
                .context(challengeRequestDto.getContext())
                .build();

        //challengePose <-> challenge 상호 매핑
        challengePose.setChallenge(challenge);

        return challengeRepository.save(challenge).getId();
    }

    public ChallengeResponseDto getChallenge(Long challengeId) {
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + challengeId));
        return new ChallengeResponseDto(challenge);
    }

    public List<ChallengeResponseDto> getChallengeList() {
        Sort sort = Sort.by(Sort.Direction.DESC, "create_date");
        List<Challenge> challenges = challengeRepository.findAll(sort);
        return challenges.stream().map(ChallengeResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public Long updateChallenge(Long challengeId, ChallengeRequestDto param) {
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + challengeId));
        ChallengePose challengePose = challenge.getChallengePose();
        challengePose.setUrl(param.getUrl());
        challenge.update(challengePose, param.getTitle(), param.getContext());
        return challengeId;
    }

    @Transactional
    public Long deleteChallenge(Long challengeId) {
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + challengeId));
        challengeRepository.delete(challenge);
        return challengeId;
    }

}
