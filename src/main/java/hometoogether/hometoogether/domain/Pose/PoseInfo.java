package hometoogether.hometoogether.domain.Pose;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class PoseInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double area;

    @ElementCollection
    private List<Double> bbox;

    private int category_id;

    @ElementCollection
    private List<Double> keypoints;

    private double score;
}
