package hometoogether.hometoogether.domain.training.Domain;

import lombok.Builder;
import lombok.Getter;

@Getter
public class TrainingVO {
    private Long trainingId;
    private String trainingName;
    private int seq;

    @Builder
    public TrainingVO(Long trainingId, String trainingName, int seq) {
        this.seq = seq;
        this.trainingId = trainingId;
        this.trainingName = trainingName;
    }
}
