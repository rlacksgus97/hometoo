package hometoogether.hometoogether.domain.room.controller;

import hometoogether.hometoogether.domain.room.dto.RoomDto;
import hometoogether.hometoogether.domain.room.service.RoomService;
import hometoogether.hometoogether.domain.training.Domain.TrainingVO;
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
    public Long createRoom(@RequestBody String routine) {
        return roomService.createRoom(routine);
    }

    @GetMapping("/room/{id}/usable")
    public boolean canEnterRoom(@PathVariable Long id){
        return roomService.canEnterRoom(id);
    }

    @GetMapping("/room/{id}")
    public List<TrainingVO> getRoom(@PathVariable Long id){
        return roomService.getRoom(id);
    }

    @GetMapping("room/{sid}/user/{uuid}/exit")
    public void exitRoom(@PathVariable("sid") final String sid, @PathVariable("uuid") final String uuid){
        roomService.exitRoom(sid, uuid);
    }
}
