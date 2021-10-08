package hometoogether.hometoogether.domain.challenge;

import hometoogether.hometoogether.domain.pose.ChallengePose;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.Getter;

@Getter
public class ChallengeResponseDto {
    private ChallengePose challengePose;
    private User master;
    private String title;
    private String context;

    public ChallengeResponseDto(Challenge entity) {
        this.challengePose = entity.getChallengePose();
        this.master = entity.getMaster();
        this.title = entity.getTitle();
        this.context = entity.getContext();
    }
}
