package hometoogether.hometoogether.domain.room.controller;

import hometoogether.hometoogether.domain.room.dto.RoomDto;
import hometoogether.hometoogether.domain.room.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/rooms")
    public List<RoomDto> getRooms(){
        List<RoomDto> rooms = roomService.getRooms();
        return rooms;
    }

    /**
     * room 만들때 실행됨
     * @return
     */
    @PostMapping("/room/create")
    public void createRoom() {
        roomService.createRoom();
    }

    @GetMapping("room/{sid}/user/{uuid}/exit")
    public void exitRoom(@PathVariable("sid") final String sid, @PathVariable("uuid") final String uuid){
        roomService.exitRoom(sid, uuid);
    }
}
