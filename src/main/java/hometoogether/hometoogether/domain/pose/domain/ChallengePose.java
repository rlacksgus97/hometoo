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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "challenge_pose")
    private List<Keypoints> keypointsList;

    public void addKeypoints(Keypoints keypoints) {
        keypoints.setChallenge_pose(this);
        this.keypointsList.add(keypoints);
    }

//    @Column(columnDefinition = "TEXT")
//    private String pose_info;

//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "challenge_pose")
//    private List<PoseInfo> poseInfoList;

    @ManyToOne
    private User user;

    @OneToOne
    private Challenge challenge;

    @Builder
    private ChallengePose(String url, List<Keypoints> keypointsList, User user, Challenge challenge) {
        this.url = url;
        this.keypointsList = keypointsList;
        this.user = user;
        this.challenge = challenge;
    }

    public void update(String job_id){
        this.job_id = job_id;
    }
}
