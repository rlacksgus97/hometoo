package hometoogether.hometoogether.domain.challenge.dto;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import lombok.Getter;

@Getter
public class ChallengeResponseDto {
    // 썸네일도 추가?
    private String username;
    private String title;

    public ChallengeResponseDto(Challenge entity) {
        this.username = entity.getChallengePose().getUser().getUsername();
        this.title = entity.getTitle();
    }
}
