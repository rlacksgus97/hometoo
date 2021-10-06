package hometoogether.hometoogether.domain.Challenge;

import hometoogether.hometoogether.domain.Pose.Pose;
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
public class Challenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Pose pose;

    private String user;

    private String title;

    private String context;

//    @OneToMany
    @ElementCollection
    private List<String> challengers;

    @Builder
    public Challenge(Pose pose, String user, String title, String context) {
        this.pose = pose;
        this.user = user;
        this.title = title;
        this.context = context;
    }

    public void update(Pose pose, String user, String title, String context) {
        this.pose = pose;
        this.user = user;
        this.title = title;
        this.context = context;
    }
}
