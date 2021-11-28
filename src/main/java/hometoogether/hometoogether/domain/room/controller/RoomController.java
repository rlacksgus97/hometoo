package hometoogether.hometoogether.domain.room.controller;

import hometoogether.hometoogether.domain.room.dto.CanEnterAndRoutineIdDto;
import hometoogether.hometoogether.domain.room.dto.RoomDto;
import hometoogether.hometoogether.domain.room.service.RoomService;
import hometoogether.hometoogether.domain.training.domain.TrainingVO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
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

    @PostMapping("/room/create/{routineId}")
    public Long createRoom(@RequestBody String routine, @PathVariable Long routineId) {
        return roomService.createRoom(routine, routineId);
    }

    @GetMapping("/room/{id}/usable")
    public CanEnterAndRoutineIdDto canEnterRoom(@PathVariable Long id){
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