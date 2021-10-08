package hometoogether.hometoogether.domain.pose.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import hometoogether.hometoogether.domain.pose.service.PoseService;
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
        String url = "https://media.istockphoto.com/photos/looking-at-camera-front-view-full-length-one-person-of-2029-years-old-picture-id1182145935";
        try{
            result = poseService.estimatePosetest(url);
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
