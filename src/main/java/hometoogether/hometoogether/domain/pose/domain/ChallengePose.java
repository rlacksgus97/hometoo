package hometoogether.hometoogether.domain.pose.domain;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
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
public class ChallengePose extends Pose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "challengePose")
    private List<PoseInfo> poseInfoList;

//    public void addPoseInfo(PoseInfo poseInfo) {
//        poseInfo.setChallengePose(this);
//        this.poseInfoList.add(poseInfo);
//    }

    @ManyToOne
    private User user;

    @OneToOne
    private Challenge challenge;

    @Builder
    private ChallengePose(String url, List<PoseInfo> poseInfoList, User user, Challenge challenge) {
        this.url = url;
        this.poseInfoList = poseInfoList;
        this.user = user;
        this.challenge = challenge;
    }

    public static class ChallengePoseBuilder extends PoseBuilder{
        ChallengePoseBuilder() {
            super();
        }
    }
}
