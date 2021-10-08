package hometoogether.hometoogether.domain.trial;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TrialService {

    private final TrialRepository trialRepository;

    @Transactional
    public Long saveTrial(TrialRequestDto trialRequestDto) {
        return trialRepository.save(trialRequestDto.toEntity()).getId();
    }

    public TrialResponseDto getTrial(Long trialId) {
        Trial trial = trialRepository.findById(trialId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + trialId));
        return new TrialResponseDto(trial);
    }

    public List<TrialResponseDto> getTrialList() {
        Sort sort = Sort.by(Sort.Direction.DESC, "create_date");
        List<Trial> trials = trialRepository.findAll(sort);
        return trials.stream().map(TrialResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public Long deleteTrial(Long trialId) {
        Trial trial = trialRepository.findById(trialId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + trialId));
        trialRepository.delete(trial);
        return trialId;
    }
}
