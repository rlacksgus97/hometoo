package hometoogether.hometoogether.domain.room.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserCountAndTimeDto {
    private Long time;
    private Long count;
}
