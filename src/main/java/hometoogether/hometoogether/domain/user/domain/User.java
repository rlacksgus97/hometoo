package hometoogether.hometoogether.domain.user.domain;

import hometoogether.hometoogether.domain.pose.domain.ChallengePose;
import hometoogether.hometoogether.domain.pose.domain.TrialPose;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;

    @OneToMany
    private List<ChallengePose> challengePoseList;

    public void addChallengePose(ChallengePose challengePose) {
        challengePose.setUser(this);
        this.challengePoseList.add(challengePose);
    }

    @OneToMany
    private List<TrialPose> trialPoseList;

    public void addTrialPose(TrialPose trialPose) {
        trialPose.setUser(this);
        this.trialPoseList.add(trialPose);
    }

    @Builder
    private User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
