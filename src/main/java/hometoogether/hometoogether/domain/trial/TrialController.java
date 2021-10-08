package hometoogether.hometoogether.domain.trial;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class TrialController {

    private final TrialService trialService;

    @PostMapping("/trials/")
    public Long save(@RequestBody TrialRequestDto param) {
        return trialService.saveTrial(param);
    }

    @GetMapping("/trials/{id}")
    public TrialResponseDto getDetail(@PathVariable("id") Long trialId){
        return trialService.getTrial(trialId);
    }

    @GetMapping("/trials")
    public List<TrialResponseDto> getList(){
        return trialService.getTrialList();
    }

    @DeleteMapping("/trials/{id}")
    public Long delete(@PathVariable("id") Long trialId){
        return trialService.deleteTrial(trialId);
    }
}
