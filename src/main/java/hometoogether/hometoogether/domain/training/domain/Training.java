package hometoogether.hometoogether.domain.training.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "TRAINING")
public class Training {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long trainingId;

    @Column(name = "training_name", nullable = false)
    private String trainingName;

//    @OneToMany(mappedBy = "TRAINING", cascade = {CascadeType.REMOVE})
//    private List<Routine> routines = new LinkedList<>();

    @Builder
    public Training(Long training_id, String training_name) {
        this.trainingId = training_id;
        this.trainingName = training_name;
    }
}
