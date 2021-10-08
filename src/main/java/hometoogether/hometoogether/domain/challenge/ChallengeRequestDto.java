package hometoogether.hometoogether.domain.challenge;

import hometoogether.hometoogether.domain.pose.ChallengePose;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChallengeRequestDto {
    private ChallengePose challengePose;
    private String title;
    private String context;

    public Challenge toEntity() {
        return Challenge.builder()
                .challengePose(challengePose)
                .title(title)
                .context(context)
                .build();
    }
}
