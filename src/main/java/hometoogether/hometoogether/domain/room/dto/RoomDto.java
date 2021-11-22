package hometoogether.hometoogether.domain.room.dto;

import hometoogether.hometoogether.domain.training.Domain.Training;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class RoomDto {

    private Long id;
    private Long max_num;
    private Long cur_num;
    private List<Training> trainings;
    private Long routineId;

}
