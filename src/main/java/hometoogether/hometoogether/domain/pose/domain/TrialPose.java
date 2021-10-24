package hometoogether.hometoogether.domain.pose.domain;

import hometoogether.hometoogether.domain.trial.domain.Trial;
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
public class TrialPose extends Pose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;

    private String contentType;

    @OneToOne
    private PoseInfo poseInfo;

    @ManyToOne
    private User user;

    @OneToOne
    private Trial trial;

    @Builder
    private TrialPose(String url, String contentType, PoseInfo poseInfo, User user, Trial trial) {
        this.url = url;
        this.contentType = contentType;
        this.poseInfo = poseInfo;
        this.user = user;
        this.trial = trial;
    }

    public static class TrialPoseBuilder extends PoseBuilder{
        TrialPoseBuilder() {
            super();
        }
    }
}
