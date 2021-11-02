package hometoogether.hometoogether.domain.challenge.domain;

import hometoogether.hometoogether.domain.pose.domain.ChallengePose;
import hometoogether.hometoogether.domain.trial.domain.Trial;
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
    private ChallengePose challengePose;

    private String title;

    private String context;

    @OneToMany
    private List<Trial> trialList;

    @Builder
    public Challenge(ChallengePose challengePose, String title, String context) {
        this.challengePose = challengePose;
        this.title = title;
        this.context = context;
    }

    public void update(ChallengePose challengePose, String title, String context) {
        this.challengePose = challengePose;
        this.title = title;
        this.context = context;
    }
}
