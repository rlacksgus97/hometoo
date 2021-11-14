package hometoogether.hometoogether.domain.training.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "ROUTINE")
public class Routine {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long routineId;

    @Column(name = "seq", nullable = false)
    private int seq;

//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
    @Column(name = "user_id", nullable = false)
    private Long userId;

//    @ManyToOne
//    @JoinColumn(name = "training_id", nullable = false)
    @Column(name = "training_id", nullable = false)
    private Long trainingId;

    @Column(name = "training_name", nullable = false)
    private String trainingName;
    // 루틴 - 운동간 매핑이 아니라 유저 - 루틴 - 운동간 매핑이 낫다(n:m)

    @Builder
    public Routine(Long userId, Long trainingId, String trainingName, int seq) {
        this.userId = userId;
        this.trainingId = trainingId;
        this.trainingName = trainingName;
        this.seq = seq;
    }

}
