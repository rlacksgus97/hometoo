package hometoogether.hometoogether.domain.challenge.dto;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import lombok.Getter;

@Getter
public class ChallengeResponseDto {
    private String url;
    private String username;
    private String title;

    public ChallengeResponseDto(Challenge entity) {
        this.url = entity.getChallengePose().getUrl();
        this.username = entity.getChallengePose().getUser().getUsername();
        this.title = entity.getTitle();
    }
}
