package hometoogether.hometoogether.domain.pose.domain.JsonResponse;

import lombok.Getter;

import java.util.List;

@Getter
public class PoseDetail {
    private double area;
    private List<Double> bbox;
    private int category_id;
    private List<Double> keypoints;
    private double score;
}
