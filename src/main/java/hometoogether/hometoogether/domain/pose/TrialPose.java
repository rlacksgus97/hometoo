package hometoogether.hometoogether.domain.pose;

import hometoogether.hometoogether.domain.trial.Trial;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class TrialPose extends Pose{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //private File file;
    private String url;

    @OneToOne
    private PoseInfo poseInfo;

    @ManyToOne
    private User user;

    @OneToOne
    private Trial trial;

    @Builder
    private TrialPose(String url, PoseInfo poseInfo, Trial trial) {
        this.url = url;
        this.poseInfo = poseInfo;
        this.trial = trial;
    }
}
