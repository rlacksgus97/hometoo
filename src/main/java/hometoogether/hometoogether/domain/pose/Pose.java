package hometoogether.hometoogether.domain.pose;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Pose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //private File file;
    private String url;

    @OneToOne
    private PoseInfo poseInfo;

    @Builder
    private Pose(String url, PoseInfo poseInfo) {
        this.url = url;
        this.poseInfo = poseInfo;
    }
}
