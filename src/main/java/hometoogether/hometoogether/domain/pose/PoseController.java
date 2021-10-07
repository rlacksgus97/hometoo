package hometoogether.hometoogether.domain.pose;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class PoseController {

    private final PoseService poseService;

    @GetMapping("/pose")
    public String pose(){
        String result = "";
        try{
            result = poseService.estimatePose();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return result;
    }

    @GetMapping("/similarity")
    public double similarity(){
        double result = 0;
        result = poseService.estimateSimilarity();
        return result;
    }
}
