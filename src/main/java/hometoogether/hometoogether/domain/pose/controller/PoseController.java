package hometoogether.hometoogether.domain.pose.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import hometoogether.hometoogether.domain.pose.service.PoseService;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
public class PoseController {

    private final PoseService poseService;

//    @GetMapping("/posetest")
//    public void test() throws ParseException {
//        poseService.test();
//        return;
//    }

//    @GetMapping("/pose")
//    public String pose() throws IOException {
//        String result = "";
//        String url = "https://myallinfo.com/wp-content/uploads/2020/12/%EB%A7%A8%EB%AA%B8-%EC%8A%A4%EC%BF%BC%ED%8A%B8-%ED%9A%A8%EA%B3%BC-5%EA%B0%80%EC%A7%80%EC%99%80-%EC%A2%85%EB%A5%98%EB%A5%BC-%EC%95%8C%EB%A0%A4%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.jpg";
//        try{
//            result = poseService.estimatePosetest(url);
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//        return result;
//    }

//    @GetMapping("/similarity")
//    public double similarity(){
//        double result = 0;
//        result = poseService.estimateSimilarity();
//        return result;
//    }
}
