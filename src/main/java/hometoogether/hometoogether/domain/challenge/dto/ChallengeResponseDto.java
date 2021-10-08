package hometoogether.hometoogether.domain.challenge.dto;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.pose.domain.ChallengePose;
import lombok.Getter;

@Getter
public class ChallengeResponseDto {
    private ChallengePose challengePose;
    private String title;
    private String context;

    public ChallengeResponseDto(Challenge entity) {
        this.challengePose = entity.getChallengePose();
        this.title = entity.getTitle();
        this.context = entity.getContext();
    }
}
