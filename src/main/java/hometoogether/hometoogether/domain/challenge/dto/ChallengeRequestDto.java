package hometoogether.hometoogether.domain.challenge.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ChallengeRequestDto {
    private String url;
    private String title;
    private String context;
}
