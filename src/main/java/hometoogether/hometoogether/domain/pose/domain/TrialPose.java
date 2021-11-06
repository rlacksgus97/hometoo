package hometoogether.hometoogether.domain.pose.domain;

import hometoogether.hometoogether.domain.trial.domain.Trial;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class TrialPose extends Pose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "trialPose")
    private List<PoseInfo> poseInfoList;

//    public void addPoseInfo(PoseInfo poseInfo) {
//        poseInfo.setTrialPose(this);
//        this.poseInfoList.add(poseInfo);
//    }

    @ManyToOne
    private User user;

    @OneToOne
    private Trial trial;

    @Builder
    private TrialPose(String url, List<PoseInfo> poseInfoList, User user, Trial trial) {
        this.url = url;
        this.poseInfoList = poseInfoList;
        this.user = user;
        this.trial = trial;
    }

    public static class TrialPoseBuilder extends PoseBuilder{
        TrialPoseBuilder() {
            super();
        }
    }
}
