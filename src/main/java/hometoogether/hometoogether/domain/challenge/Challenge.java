package hometoogether.hometoogether.domain.challenge;

import hometoogether.hometoogether.domain.pose.Pose;
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
public class Challenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Pose pose;

    @ManyToOne
    private User master;

    private String title;

    private String context;

    @OneToMany
    private List<User> challengers;

    @Builder
    public Challenge(Pose pose, User master, String title, String context) {
        this.pose = pose;
        this.master = master;
        this.title = title;
        this.context = context;
    }

    public void update(Pose pose, User master, String title, String context) {
        this.pose = pose;
        this.master = master;
        this.title = title;
        this.context = context;
    }
}
