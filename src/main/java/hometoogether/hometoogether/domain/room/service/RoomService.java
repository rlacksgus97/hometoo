package hometoogether.hometoogether.domain.room.service;
//
//import hometoogether.hometoogether.domain.room.domain.Room;
//import hometoogether.hometoogether.util.Parser;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.socket.WebSocketSession;
//
//import java.util.*;
//
//@Service
//public class RoomService {
//
//    private final Parser parser;
//
//    // repository substitution since this is a very simple realization
//    private final Set<Room> rooms = new TreeSet<>(Comparator.comparing(Room::getId));
//
//    @Autowired
//    public RoomService(final Parser parser) {
//        this.parser = parser;
//    }
//
//    public Set<Room> getRooms() {
//        final TreeSet<Room> defensiveCopy = new TreeSet<>(Comparator.comparing(Room::getId));
//        defensiveCopy.addAll(rooms);
//
//        return defensiveCopy;
//    }
//
//    public Boolean addRoom(final Room room) {
//        return rooms.add(room);
//    }
//
//    public Optional<Room> findRoomByStringId(final String sid) {
//        // simple get() because of parser errors handling
//        return rooms.stream().filter(r -> r.getId().equals(parser.parseId(sid).get())).findAny();
//    }
//
//    public Long getRoomId(Room room) {
//        return room.getId();
//    }
//
//    public Map<String, WebSocketSession> getClients(final Room room) {
//        return Optional.ofNullable(room)
//                .map(r -> Collections.unmodifiableMap(r.getClients()))
//                .orElse(Collections.emptyMap());
//    }
//
//    public WebSocketSession addClient(final Room room, final String name, final WebSocketSession session) {
//        return room.getClients().put(name, session);
//    }
//
//    public WebSocketSession removeClientByName(final Room room, final String name) {
//        return room.getClients().remove(name);
//    }
//}

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
