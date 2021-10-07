package hometoogether.hometoogether.domain.challenge;

import hometoogether.hometoogether.domain.pose.Pose;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.Getter;

@Getter
public class ChallengeResponseDto {
    private Pose pose;
    private User master;
    private String title;
    private String context;

    public ChallengeResponseDto(Challenge entity) {
        this.pose = entity.getPose();
        this.master = entity.getMaster();
        this.title = entity.getTitle();
        this.context = entity.getContext();
    }
}
