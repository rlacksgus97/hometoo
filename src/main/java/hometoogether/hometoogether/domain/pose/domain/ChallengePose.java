package hometoogether.hometoogether.domain.pose.domain;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
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
public class ChallengePose extends Pose {

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
    private Challenge challenge;

    @Builder
    private ChallengePose(String url, String contentType, PoseInfo poseInfo, User user, Challenge challenge) {
        this.url = url;
        this.contentType = contentType;
        this.poseInfo = poseInfo;
        this.user = user;
        this.challenge = challenge;
    }

    public static class ChallengePoseBuilder extends PoseBuilder{
        ChallengePoseBuilder() {
            super();
        }
    }
}
