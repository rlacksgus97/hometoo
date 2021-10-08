package hometoogether.hometoogether.domain.trial.dto;

import hometoogether.hometoogether.domain.pose.domain.TrialPose;
import hometoogether.hometoogether.domain.trial.domain.Trial;
import lombok.Getter;

@Getter
public class TrialResponseDto {
    private TrialPose trialPose;

    public TrialResponseDto(Trial entity) {
        this.trialPose = entity.getTrialPose();
    }
}
