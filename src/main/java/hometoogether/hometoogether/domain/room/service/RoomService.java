package hometoogether.hometoogether.domain.room.service;

import hometoogether.hometoogether.domain.room.domain.Room;
import hometoogether.hometoogether.domain.room.dto.RoomDto;
import hometoogether.hometoogether.domain.room.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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

    public void exitRoom(String sid, String uuid){
        if(sid != null && uuid != null) {
            logger.debug("User {} has left Room #{}", uuid, sid);
        }
    }

    public void createRoom(){
        roomRepository.save(new Room(2L));
    }
}
