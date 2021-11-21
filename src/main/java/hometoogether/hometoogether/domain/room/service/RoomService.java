package hometoogether.hometoogether.domain.room.service;

import hometoogether.hometoogether.domain.room.domain.Room;
import hometoogether.hometoogether.domain.room.dto.RoomDto;
import hometoogether.hometoogether.domain.room.repository.RoomRepository;
import hometoogether.hometoogether.domain.training.Domain.Training;
import hometoogether.hometoogether.domain.training.Domain.TrainingVO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@RequiredArgsConstructor
public class RoomService{

    private final RoomRepository roomRepository;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public List<RoomDto> getRooms(){
        List<Room> all = roomRepository.findAll();
        List<RoomDto> result=new ArrayList<>();

        for(Room room : all){
            result.add(RoomDto.builder()
                    .id(room.getId())
                    .cur_num(room.getCur_num())
                    .max_num(room.getMax_num())
                    .build());
        }

        return result;
    }

    @Transactional
    public List<TrainingVO> getRoom(Long roomId){
        List<TrainingVO> trainingVOList=new ArrayList<>();
        Room room = roomRepository.findById(roomId).orElse(null);
        for (Training training : room.getTrainings()) {
            TrainingVO element = TrainingVO.builder()
                    .trainingId(training.getTrainingId())
                    .trainingName(training.getTrainingName())
                    .trainingSec(training.getTrainingSec())
                    .trainingSetCnt(training.getTrainingSetCnt())
                    .seq(training.getSeq()).build();

            trainingVOList.add(element);
        }

        return trainingVOList;
    }

    public boolean canEnterRoom(Long roomId){
        Room room = roomRepository.findById(roomId).orElse(null);
        if(room.getCur_num()<room.getMax_num()) return true;
        else return false;
    }

    public void exitRoom(String sid, String uuid){
        if(sid != null && uuid != null) {
            logger.debug("User {} has left Room #{}", uuid, sid);
        }
    }

    @Transactional
    public Long createRoom(String routine){
        List<Training> trainings=new ArrayList<>();

        // 1차 파싱
        routine=routine.replace("[", "");
        routine=routine.replace("]", "");
        routine=routine.replace("\"", "");
        String[] split = routine.split("}");

        // 2차 파싱
        for(String notParsedTraining : split){
            if(notParsedTraining.charAt(0)==',') notParsedTraining=notParsedTraining.substring(1);
            Map<String, String> stringStringMap = arrayParse(notParsedTraining);

            Training training = Training.builder()
                    .trainingName(stringStringMap.get("trainingName"))
                    .trainingSec(Integer.parseInt(stringStringMap.get("trainingSec")))
                    .trainingSetCnt(Integer.parseInt(stringStringMap.get("trainingSetCnt")))
                    .seq(Integer.parseInt(stringStringMap.get("seq"))).build();

            trainings.add(training);
        }

        Room room = Room.builder()
                .cur_num(0L).max_num(2L)
                .trainings(trainings).build();

        return roomRepository.save(room).getId();
    }

    public Room findByRoomId(Long id){
        Room room = roomRepository.findById(id).orElse(null);
        return room;
    }

    private Map<String, String> arrayParse(String notParsedString){
        Map<String, String> resultTraining=new HashMap<>();

        notParsedString=notParsedString.replace("{", "");
        notParsedString=notParsedString.replace(" ", "");

        String[] notFullyParsedString = notParsedString.split(",");
        
        for(String string : notFullyParsedString){

            String[] split = string.split(":");
            resultTraining.put(split[0], split[1]);
        }

        return resultTraining;
    }
}
