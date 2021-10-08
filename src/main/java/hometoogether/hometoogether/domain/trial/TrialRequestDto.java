package hometoogether.hometoogether.domain.trial;

import hometoogether.hometoogether.domain.pose.TrialPose;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TrialRequestDto {
    private TrialPose trialPose;

    public Trial toEntity() {
        return Trial.builder()
                .trialPose(trialPose)
                .build();
    }
}
