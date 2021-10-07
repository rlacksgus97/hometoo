package hometoogether.hometoogether.domain.challenge;

import hometoogether.hometoogether.domain.pose.Pose;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChallengeRequestDto {
    private Pose pose;
    private User master;
    private String title;
    private String context;

    public Challenge toEntity() {
        return Challenge.builder()
                .pose(pose)
                .master(master)
                .title(title)
                .context(context)
                .build();
    }
}
