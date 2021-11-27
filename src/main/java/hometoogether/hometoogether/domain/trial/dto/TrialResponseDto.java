package hometoogether.hometoogether.domain.trial.dto;

import hometoogether.hometoogether.domain.trial.domain.Trial;
import lombok.Getter;

@Getter
public class TrialResponseDto {
    private String url;
    private String username;

    public TrialResponseDto(Trial entity) {
        this.url = entity.getTrialPose().getUrl();
        this.username = entity.getTrialPose().getUser().getUserName();
    }
}
