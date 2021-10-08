package hometoogether.hometoogether.domain.trial;

import hometoogether.hometoogether.domain.challenge.Challenge;
import hometoogether.hometoogether.domain.pose.TrialPose;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Trial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private TrialPose trialPose;

    @ManyToOne
    private Challenge challenge;

    @Builder
    public Trial(TrialPose trialPose, Challenge challenge) {
        this.trialPose = trialPose;
        this.challenge = challenge;
    }

    public void update(TrialPose trialPose, Challenge challenge) {
        this.trialPose = trialPose;
        this.challenge = challenge;
    }
}
