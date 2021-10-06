package hometoogether.hometoogether.domain.Challenge;

import hometoogether.hometoogether.Pose.Pose;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChallengeRequestDto {
    private Pose pose;
    private String user;
    private String title;
    private String context;

    public Challenge toEntity() {
        return Challenge.builder()
                .pose(pose)
                .user(user)
                .title(title)
                .context(context)
                .build();
    }
}
