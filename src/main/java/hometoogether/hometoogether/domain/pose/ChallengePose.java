package hometoogether.hometoogether.domain.pose;

import hometoogether.hometoogether.domain.challenge.Challenge;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ChallengePose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //private File file;
    private String url;

    @OneToOne
    private PoseInfo poseInfo;

    @OneToOne
    private Challenge challenge;

    @Builder
    private ChallengePose(String url, PoseInfo poseInfo, Challenge challenge) {
        this.url = url;
        this.poseInfo = poseInfo;
        this.challenge = challenge;
    }
}
