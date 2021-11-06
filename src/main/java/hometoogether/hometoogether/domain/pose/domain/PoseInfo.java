package hometoogether.hometoogether.domain.pose.domain;

import hometoogether.hometoogether.domain.pose.domain.JsonResponse.PoseDetail;
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

//    @ManyToOne
//    private ChallengePose challengePose;
//
//    @ManyToOne
//    private TrialPose trialPose;

    @Builder
    private PoseInfo(PoseDetail poseDetail){
        this.area = poseDetail.getArea();
        this.bbox = poseDetail.getBbox();
        this.keypoints = poseDetail.getKeypoints();
        this.score = poseDetail.getScore();
    }

}
