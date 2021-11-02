package hometoogether.hometoogether.domain.challenge.dto;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import lombok.Getter;

@Getter
public class ChallengeDetailResponseDto {
    //동영상 스트리밍
    private String user;
    private String title;
    private String context;

    public ChallengeDetailResponseDto(Challenge entity) {
        this.user = entity.getChallengePose().getUser().getName();
        this.title = entity.getTitle();
        this.context = entity.getContext();
    }
}
