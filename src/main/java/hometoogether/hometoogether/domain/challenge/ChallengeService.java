package hometoogether.hometoogether.domain.challenge;

import com.fasterxml.jackson.core.JsonProcessingException;
import hometoogether.hometoogether.domain.pose.PoseService;
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
        poseService.estimatePose();
        
        return challengeRepository.save(challengeRequestDto.toEntity()).getId();
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
        challenge.update(param.getChallengePose(), param.getTitle(), param.getContext());
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
