package hometoogether.hometoogether.domain.trial.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Getter
@NoArgsConstructor
public class TrialRequestDto {
    private MultipartFile file;
    private String username;
}
