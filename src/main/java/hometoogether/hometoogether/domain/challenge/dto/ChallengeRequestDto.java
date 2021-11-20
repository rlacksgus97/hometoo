package hometoogether.hometoogether.domain.challenge.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@Data
public class ChallengeRequestDto {
    private MultipartFile file;
    private String username;
    private String title;
    private String context;
}
