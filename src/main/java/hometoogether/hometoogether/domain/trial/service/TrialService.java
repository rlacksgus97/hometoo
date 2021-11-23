package hometoogether.hometoogether.domain.trial.service;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import hometoogether.hometoogether.domain.challenge.repository.ChallengeRepository;
import hometoogether.hometoogether.domain.pose.domain.Keypoints;
import hometoogether.hometoogether.domain.pose.domain.TrialPose;
import hometoogether.hometoogether.domain.pose.repository.TrialPoseRepository;
import hometoogether.hometoogether.domain.pose.service.PoseService;
import hometoogether.hometoogether.domain.trial.domain.Trial;
import hometoogether.hometoogether.domain.trial.dto.TrialRequestDto;
import hometoogether.hometoogether.domain.trial.dto.TrialResponseDto;
import hometoogether.hometoogether.domain.trial.repository.TrialRepository;
import hometoogether.hometoogether.domain.user.domain.User;
import hometoogether.hometoogether.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.jcodec.api.FrameGrab;
import org.jcodec.api.JCodecException;
import org.jcodec.common.model.Picture;
import org.jcodec.scale.AWTUtil;
import org.json.simple.parser.ParseException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.transaction.Transactional;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TrialService {

    private final UserRepository userRepository;
    private final TrialRepository trialRepository;
    private final ChallengeRepository challengeRepository;
    private final TrialPoseRepository trialPoseRepository;
    private final PoseService poseService;

    @Transactional
    public Long saveTrial(Long challengeId, TrialRequestDto trialRequestDto) throws IOException, ParseException, JCodecException {
        // parameter로 SessionUser 받아오게 구현 예정

        //TrialPose 생성
        //url, poseInfoList, user
        MultipartFile multipartFile = trialRequestDto.getFile();
        String url = UUID.randomUUID().toString() + "_" + multipartFile.getOriginalFilename();
        File file = new File(url);
        multipartFile.transferTo(file);

        String thumbnail_url = createThumbnail(file);

        User user = userRepository.findByUsername(trialRequestDto.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 없습니다. username=" + trialRequestDto.getUsername()));

        TrialPose trialPose = TrialPose.builder()
                .url(url)
                .thumbnail_url(thumbnail_url)
                .user(user)
                .build();
        trialPoseRepository.save(trialPose);

        poseService.estimatePosePhoto(trialPose.getId(), url, "trial");
//        poseService.estimatePoseVideo(trialPose.getId(), url, "trial");

        //User <-> ChallengePose 매핑
        user.addTrialPose(trialPose);

        //Trial 생성
        Trial trial = Trial.builder()
                .trialPose(trialPose)
                .build();

        //trialPose <-> trial 상호 매핑
        trialPose.setTrial(trial);

        //Trial <-> Challenge 상호 매핑
        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + challengeId));
        challenge.addTrial(trial);

        trial.setChallenge(challenge);

        return trialRepository.save(trial).getId();
    }

    @Transactional
    public String createThumbnail(File source) throws IOException, JCodecException {
        String url = UUID.randomUUID().toString();
        Picture picture = FrameGrab.getFrameFromFile(source, 0);
        BufferedImage bufferedImage = AWTUtil.toBufferedImage(picture);
        ImageIO.write(bufferedImage, "jpg", new File(url));
        return url;
    }

    @Transactional
    public double runSimilarity(Long challengeId, Long trialId){
//        Trial trial = trialRepository.findById(trialId)
//                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + trialId));
//
//        Challenge challenge = trial.getChallenge();

        Challenge challenge = challengeRepository.findById(challengeId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + 0));

        Trial trial = trialRepository.findById(trialId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + 1));

        List<Keypoints> keypointsListA = challenge.getChallengePose().getKeypointsList();
        List<Double> keypointsA = keypointsListA.get(0).getKeypoints();
        List<Keypoints> keypointsListB = trial.getTrialPose().getKeypointsList();
        List<Double> keypointsB = keypointsListB.get(0).getKeypoints();

        double similarity = poseService.estimateSimilarity(keypointsA , keypointsB);

        return similarity;
    }

    public TrialResponseDto getTrial(Long trialId) {
        Trial trial = trialRepository.findById(trialId)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + trialId));
        return new TrialResponseDto(trial);
    }

    public List<TrialResponseDto> getTrialList() {
//        Sort sort = Sort.by(Sort.Direction.DESC, "create_date");
        List<Trial> trials = trialRepository.findAll();
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
