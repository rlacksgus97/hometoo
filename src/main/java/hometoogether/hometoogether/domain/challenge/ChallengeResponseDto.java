package hometoogether.hometoogether.domain.challenge;

import hometoogether.hometoogether.domain.pose.ChallengePose;
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
