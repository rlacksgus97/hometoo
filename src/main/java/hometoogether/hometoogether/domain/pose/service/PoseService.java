package hometoogether.hometoogether.domain.pose.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import hometoogether.hometoogether.domain.challenge.dto.ChallengeRequestDto;
import hometoogether.hometoogether.domain.pose.domain.*;
import hometoogether.hometoogether.domain.pose.domain.JsonResponse.JobId;
import hometoogether.hometoogether.domain.pose.domain.JsonResponse.PoseDetail;
import hometoogether.hometoogether.domain.pose.repository.ChallengePoseRepository;
import hometoogether.hometoogether.domain.pose.repository.PoseInfoRepository;
import hometoogether.hometoogether.domain.pose.repository.PoseRepository;
import hometoogether.hometoogether.domain.pose.repository.TrialPoseRepository;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class PoseService {

    private final ChallengePoseRepository challengePoseRepository;
    private final TrialPoseRepository trialPoseRepository;

//    public String estimatePosetest(String url) throws IOException {
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//        headers.add("Authorization", "KakaoAK 19a4097fe8917a985bb1a7acc9ce2fb1");
//
//        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
////        String url = "https://preview.clipartkorea.co.kr/2016/05/27/ti325057081.jpg";
////        String url = "https://preview.clipartkorea.co.kr/2015/03/20/tip034z15020088.jpg";
////        String url = "http://preview.clipartkorea.co.kr/2016/05/27/ti325057171.jpg";
////        String url = "https://media.istockphoto.com/photos/looking-at-camera-front-view-full-length-one-person-of-2029-years-old-picture-id1182145935";
//
//        params.add("image_url", url);
//
//        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(params, headers);
//
//        RestTemplate rt = new RestTemplate();
//        ResponseEntity<String> response = rt.exchange(
//                "https://cv-api.kakaobrain.com/pose",
//                HttpMethod.POST,
//                entity,
//                String.class
//                );
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        String jsonbody = response.getBody();
//        PoseInfo poseInfo = objectMapper.readValue(jsonbody, PoseInfo.class);
//        poseInfoRepository.save(poseInfo);
//
//        Pose pose = Pose.builder()
//                .url(url)
//                .poseInfo(poseInfo)
//                .build();
//        poseRepository.save(pose);
//
//        System.out.println("response = " + response);
//        return jsonbody;
//    }

//    public void test() throws ParseException {
//        String response = "[\n" +
//                "    {\n" +
//                "        \"area\": 101090.2833,\n" +
//                "        \"bbox\": [719.4526, 244.1255, 182.7314, 553.2178],\n" +
//                "        \"category_id\": 1,\n" +
//                "        \"keypoints\": [\n" +
//                "            805.4897, 256.4165, 0.8422, 819.5366, 245.0034, 0.8773, 795.8325, 244.1255, 0.8664, 845.8745, 254.6606, 0.8105, 788.8091, 251.1489, 0.0631, 885.3813, 320.5054, 0.7525, 749.3022, 331.9185, 0.7706, 898.5503, 377.5708, 0.7825, 719.4526, 414.4438, 0.7897, 901.1841, 435.5142, 0.7782, 749.3022, 443.4155, 0.8086, 852.02, 504.8706, 0.6854, 785.2974, 511.894, 0.6738, 833.5835, 644.4614, 0.7899, 800.2222, 659.3862, 0.7655, 833.5835, 796.3433, 0.7055, 824.8042, 743.6675, 0.5165\n" +
//                "        ],\n" +
//                "        \"score\": 0.7185\n" +
//                "    }\n" +
//                "]";
//        JSONParser jsonParse = new JSONParser();
//        JSONArray jsonArr = (JSONArray) jsonParse.parse(response);
//        JSONObject jsonObj = (JSONObject) jsonArr.get(0);
//        List<Double> keypoints = (List<Double>) jsonObj.get("keypoints");
//        for (Double kp : keypoints){
//            System.out.println("kp = " + kp);
//        }
//
//
//        JSONParser jsonParse = new JSONParser();
//        JSONObject jsonObj = (JSONObject) jsonParse.parse(response.getBody());
//        JSONArray jsonArr = (JSONArray) jsonObj.get("annotations");
//        for (int i=0; i<jsonArr.size(); i++) {
//            JSONObject jsonPart = (JSONObject) jsonArr.get(i);
//            List<Double> keypoints = (List<Double>) jsonPart.get(i);
//        }
//    }

    @Transactional
    @Async
    public void estimatePosePhoto(Long pose_id, String url, String pose_type) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.add("Authorization", "KakaoAK 19a4097fe8917a985bb1a7acc9ce2fb1");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("image_url", "http://221.143.144.143:80/"+url);

        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(params, headers);

        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
                "https://cv-api.kakaobrain.com/pose",
                HttpMethod.POST,
                entity,
                String.class
        );

        if (pose_type == "challenge")
        {
            ChallengePose challengePose = challengePoseRepository.getById(pose_id);
            challengePose.setPose_info(response.getBody());
        }
        else if (pose_type == "trial"){
            TrialPose trialPose = trialPoseRepository.getById(pose_id);
            trialPose.setPose_info(response.getBody());
        }

//        ObjectMapper objectMapper = new ObjectMapper();
//        String jsonbody = response.getBody();
//        List<PoseDetail> poseDetailList = objectMapper.readValue(jsonbody, new TypeReference<List<PoseDetail>>(){});
//
//        List<PoseInfo> poseInfoList = new ArrayList<>();
//        for (PoseDetail pd : poseDetailList){
//            PoseInfo poseInfo = PoseInfo.builder()
//                    .poseDetail(pd)
//                    .build();
//            poseInfo.setChallenge_pose(challengePose);
//            poseInfoRepository.save(poseInfo);
//            poseInfoList.add(poseInfo);
//        }
//
//        challengePose.setPoseInfoList(poseInfoList);

        return;
    }

    @Transactional
    @Async
    public void estimatePoseVideo(Long pose_id, String url, String pose_type) throws ParseException {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        headers.add("Authorization", "KakaoAK 19a4097fe8917a985bb1a7acc9ce2fb1");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("video_url", "http://221.143.144.143:80/"+url);

        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(params, headers);

        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
                "https://cv-api.kakaobrain.com/pose/job",
                HttpMethod.POST,
                entity,
                String.class
        );

        JSONParser jsonParse = new JSONParser();
        JSONObject jsonObj = (JSONObject) jsonParse.parse(response.getBody());
        String job_id = (String) jsonObj.get("job_id");

        try {
            Thread.sleep(300000);
            String poseInfo = estimatePoseDetailVideo(job_id);
            if (pose_type == "challenge")
            {
                ChallengePose challengePose = challengePoseRepository.getById(pose_id);
                challengePose.setPose_info(poseInfo);
            }
            else if (pose_type == "trial"){
                TrialPose trialPose = trialPoseRepository.getById(pose_id);
                trialPose.setPose_info(poseInfo);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return;
    }

    public String estimatePoseDetailVideo(String job_id) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        headers.add("Authorization", "KakaoAK 19a4097fe8917a985bb1a7acc9ce2fb1");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("job_id", job_id);

        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(params, headers);

        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
                "https://cv-api.kakaobrain.com/pose/job/"+job_id,
                HttpMethod.GET,
                entity,
                String.class
        );

        return response.getBody();
    }

    public double estimateSimilarity(List<Double> pose1, List<Double> pose2){

//        List<Double> pose1 = poseInfoRepository.getById(6L).getKeypoints();
//        List<Double> pose2 = poseInfoRepository.getById(7L).getKeypoints();

        ArrayList<ArrayList<Double>> vectorInfo1 = vectorize(pose1);
        ArrayList<ArrayList<Double>> vectorInfo2 = vectorize(pose2);

        ArrayList<Double> vectorPose1XY = vectorInfo1.get(0);
        ArrayList<Double> vectorMinMax1 = vectorInfo1.get(1);
        ArrayList<Double> vectorPose1Scores = vectorInfo1.get(2);

        ArrayList<Double> vectorPose2XY = vectorInfo2.get(0);
        ArrayList<Double> vectorMinMax2 = vectorInfo2.get(1);
        ArrayList<Double> vectorPose2Scores = vectorInfo2.get(2);

        vectorPose1XY = sclaeAndtranslate(vectorPose1XY, vectorMinMax1);
        vectorPose2XY = sclaeAndtranslate(vectorPose2XY, vectorMinMax2);

        vectorPose1XY = L2Normalize(vectorPose1XY);
        vectorPose2XY = L2Normalize(vectorPose2XY);

        double cosineSimilarity = cosineSimilarity(vectorPose1XY, vectorPose2XY);

        double cosineDistance = cosineDistanceMatching(vectorPose1XY, vectorPose2XY);

        double weightedDistance = weightedDistanceMatching(vectorPose1XY, vectorPose2XY, vectorPose2Scores);

        return cosineSimilarity;
    }

    private ArrayList<ArrayList<Double>> vectorize(List<Double> pose) {

        ArrayList<ArrayList<Double>> vectorInfo = new ArrayList<ArrayList<Double>>();
        ArrayList<Double> vectorposeXY = new ArrayList<>();
        ArrayList<Double> vectorMinMax = new ArrayList<>();
        ArrayList<Double> vectorposeScores = new ArrayList<>();

        double x_min = 10000;
        double y_min = 10000;
        double xy_max = -1;
        double score_sum = 0;

        for(int i = 0; i< pose.size(); i++){
            double item = pose.get(i);
            if (i%3 != 2){
                if (i%3 == 0) {
                    x_min = Math.min(item, x_min);
                }
                else {
                    y_min = Math.min(item, y_min);
                }
                xy_max = Math.max(item, xy_max);
                vectorposeXY.add(item);
            }
            else{
                score_sum += item;
                vectorposeScores.add(item);
            }
        }
        vectorposeScores.add(score_sum);

        vectorMinMax.add(x_min);
        vectorMinMax.add(y_min);
        vectorMinMax.add(xy_max);

        vectorInfo.add(vectorposeXY);
        vectorInfo.add(vectorMinMax);
        vectorInfo.add(vectorposeScores);

        return vectorInfo;
    }

    private ArrayList<Double> sclaeAndtranslate(ArrayList<Double> vectorPoseXY, ArrayList<Double> vectorMinMax) {

        for(int i = 0; i< vectorPoseXY.size(); i++){
            double item = vectorPoseXY.get(i);
            if (i%2 == 0){
                item -= vectorMinMax.get(0);
            }
            else {
                item -= vectorMinMax.get(1);
            }
            item /= vectorMinMax.get(2);
            vectorPoseXY.set(i, item);
        }

        return vectorPoseXY;
    }

    private ArrayList<Double> L2Normalize(ArrayList<Double> vectorPoseXY) {
        double absVectorPoseXY = 0;
        for (Double pos: vectorPoseXY) {
            absVectorPoseXY += Math.pow(pos, 2);
        }
        absVectorPoseXY = Math.sqrt(absVectorPoseXY);
        for (Double pos: vectorPoseXY) {
            pos /= absVectorPoseXY;
        }
        return vectorPoseXY;
    }

    private double cosineSimilarity(ArrayList<Double> vectorPose1XY, ArrayList<Double> vectorPose2XY) {
        double v1DotV2 = 0;
        double absV1 = 0;
        double absV2 = 0;
        double v1 = 0;
        double v2 = 0;

        for(int i = 0; i< vectorPose1XY.size(); i++){
            v1 = vectorPose1XY.get(i);
            v2 = vectorPose2XY.get(i);
            v1DotV2 += v1*v2;
            absV1 += v1*v1;
            absV2 += v2*v2;
        }

        absV1 = Math.sqrt(absV1);
        absV2 = Math.sqrt(absV2);

        return v1DotV2 / (absV1 * absV2);
    }

    private double cosineDistanceMatching(ArrayList<Double> vectorPose1XY, ArrayList<Double> vectorPose2XY) {
        double cosineSimilarity = cosineSimilarity(vectorPose1XY, vectorPose2XY);
        System.out.println("cosineSimilarity = " + cosineSimilarity);
        return Math.sqrt(2*(1-cosineSimilarity));
    }

    private double weightedDistanceMatching(ArrayList<Double> vectorPose1XY, ArrayList<Double> vectorPose2XY, ArrayList<Double> vectorPose2Scores) {

        double summation1 = 1 / vectorPose2Scores.get(vectorPose2Scores.size()-1);
        double summation2 = 0;

        for (int i = 0; i< vectorPose1XY.size(); i++){
            int confIndex = (int) Math.floor(i/2);
            summation2 = vectorPose2Scores.get(confIndex) * Math.abs(vectorPose1XY.get(i) - vectorPose2XY.get(i));
        }

        return summation1 * summation2;
    }

    private double DTWDistance(double[] SimilarityListA, double[] SimilarityListB){

        int lengthA = SimilarityListA.length;
        int lengthB = SimilarityListB.length;
        double[][] DTW = new double[lengthA+1][lengthB+1];

        for (int i = 0; i < lengthA+1; i++){
            for (int j = 0; j < lengthB+1; j++) {
                DTW[i][j] = 10;
            }
        }
        DTW[lengthA-1][lengthB-1] = 0;

        double cost = 0;
        for (int i = 1; i < lengthA+1; i++){
            for (int j = 1; j < lengthB+1; j++) {
                cost = Math.abs(SimilarityListA[i] - SimilarityListB[j]);
                DTW[i][j] = cost + Math.min(Math.min(DTW[i-1][j], DTW[i][j-1]), DTW[i-1][j-1]);
            }
        }

        return DTW[lengthA][lengthB];
    }
}
