package hometoogether.hometoogether.domain.training.Domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="ROUTINE")
public class Routine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long routineId;

//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
    @Column(name = "user_id", nullable = false)
    private Long userId;

    private String routineName;
    private float routineAvgScore;
    private int evaluateCnt;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Training> trainings;

    @Builder
    public Routine(Long userId, String routineName, List<Training> trainings) {
        this.userId = userId;
        this.routineName=routineName;
        this.trainings=trainings;
    }
}
