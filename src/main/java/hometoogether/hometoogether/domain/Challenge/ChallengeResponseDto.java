package hometoogether.hometoogether.domain.Challenge;

import hometoogether.hometoogether.Pose.Pose;
import lombok.Getter;

@Getter
public class ChallengeResponseDto {
    private Pose pose;
    private String user;
    private String title;
    private String context;

    public ChallengeResponseDto(Challenge entity) {
        this.pose = entity.getPose();
        this.user = entity.getUser();
        this.title = entity.getTitle();
        this.context = entity.getContext();
    }
}
