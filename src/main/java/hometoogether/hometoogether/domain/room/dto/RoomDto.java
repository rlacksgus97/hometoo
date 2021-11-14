package hometoogether.hometoogether.domain.room.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RoomDto {

    private Long id;
    private Long max_num;
    private Long cur_num;

}
