package hometoogether.hometoogether.domain.pose.domain;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "challenge_pose")
public class ChallengePose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;

    private String job_id;

    @ElementCollection
    private List<String> keypoints;

//    @Column(columnDefinition = "TEXT")
//    private String pose_info;

//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "challenge_pose")
//    private List<PoseInfo> poseInfoList;

//    public void addPoseInfo(PoseInfo poseInfo) {
//        poseInfo.setChallengePose(this);
//        this.poseInfoList.add(poseInfo);
//    }

    @ManyToOne
    private User user;

    @OneToOne
    private Challenge challenge;

    @Builder
    private ChallengePose(String url, List<String> keypoints, User user, Challenge challenge) {
        this.url = url;
        this.keypoints = keypoints;
        this.user = user;
        this.challenge = challenge;
    }

//    public static class ChallengePoseBuilder extends PoseBuilder{
//        ChallengePoseBuilder() {
//            super();
//        }
//    }
}
