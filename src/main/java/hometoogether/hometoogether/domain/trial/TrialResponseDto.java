package hometoogether.hometoogether.domain.trial;

import hometoogether.hometoogether.domain.pose.TrialPose;
import lombok.Getter;

@Getter
public class TrialResponseDto {
    private TrialPose trialPose;

    public TrialResponseDto(Trial entity) {
        this.trialPose = entity.getTrialPose();
    }
}
