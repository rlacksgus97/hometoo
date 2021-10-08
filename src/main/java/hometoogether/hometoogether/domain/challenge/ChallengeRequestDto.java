package hometoogether.hometoogether.domain.challenge;

import hometoogether.hometoogether.domain.pose.ChallengePose;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChallengeRequestDto {
    private ChallengePose challengePose;
    private User master;
    private String title;
    private String context;

    public Challenge toEntity() {
        return Challenge.builder()
                .challengePose(challengePose)
                .master(master)
                .title(title)
                .context(context)
                .build();
    }
}
