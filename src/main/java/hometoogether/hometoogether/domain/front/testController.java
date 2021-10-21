package hometoogether.hometoogether.domain.front;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class testController {

    @GetMapping("/test")
    public HashMap test() {
        HashMap result = new HashMap();
        result.put("message", "test입니다.");

        return result;
    }
}
