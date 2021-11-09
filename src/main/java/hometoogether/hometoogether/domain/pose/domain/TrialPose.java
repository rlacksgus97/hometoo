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
@Entity(name = "trial_pose")
public class TrialPose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;

    private String job_id;

    @ElementCollection
    private List<String> keypoints;

//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "trial_pose")
//    private List<PoseInfo> poseInfoList;

//    public void addPoseInfo(PoseInfo poseInfo) {
//        poseInfo.setTrialPose(this);
//        this.poseInfoList.add(poseInfo);
//    }

    @ManyToOne
    private User user;

    @OneToOne
    private Trial trial;

    @Builder
    private TrialPose(String url, List<String> keypoints, User user, Trial trial) {
        this.url = url;
        this.keypoints = keypoints;
        this.user = user;
        this.trial = trial;
    }

//    public static class TrialPoseBuilder extends PoseBuilder{
//        TrialPoseBuilder() {
//            super();
//        }
//    }
}
