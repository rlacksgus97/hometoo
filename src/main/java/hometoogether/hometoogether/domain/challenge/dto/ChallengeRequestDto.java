package hometoogether.hometoogether.domain.challenge.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Getter
@NoArgsConstructor
public class ChallengeRequestDto {
    private MultipartFile file;
    private String title;
    private String context;
}
