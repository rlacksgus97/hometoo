//package hometoogether.hometoogether.domain.room.controller;
//
//import hometoogether.hometoogether.domain.room.service.MainRoomService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.servlet.ModelAndView;
//
//@Controller
//@RequiredArgsConstructor
//public class RoomController {
//
//    private final MainRoomService mainService;
//
//    /**
//     * home 접속시 실행
//     */
//    @GetMapping("/room/create")
//    public String displayMainPage(Model model, final Long id, final String uuid) {
//        return this.mainService.displayMainPage(model, id, uuid);
//    }
//
//    /**
//     * room 만들때 실행됨
//     * @param sid
//     * @param uuid
//     * @param binding
//     * @return
//     */
//    @PostMapping(value = "/room", params = "action=create")
//    public String processRoomSelection(Model model, @ModelAttribute("id") final String sid,
//                                       @ModelAttribute("uuid") final String uuid, final BindingResult binding) {
//        System.out.println("uuid = " + uuid);
//        return this.mainService.processRoomSelection(model, sid, uuid, binding);
//    }
//
//    /**
//     * 채팅방에 입장할때 실행됨 (채팅방 id 와 입장 uuid 필요)
//     */
//    @GetMapping("/room/{sid}/user/{uuid}")
//    public String displaySelectedRoom(Model model, @PathVariable("sid") final String sid, @PathVariable("uuid") final String uuid) {
//        return this.mainService.displaySelectedRoom(model, sid, uuid);
//    }
//
//    /**
//     * 채팅방에서 나갈때 실행됨
//     */
//    @GetMapping("/room/{sid}/user/{uuid}/exit")
//    public String processRoomExit(@PathVariable("sid") final String sid, @PathVariable("uuid") final String uuid) {
//        return this.mainService.processRoomExit(sid, uuid);
//    }
//
//    @GetMapping("/room/random")
//    public String requestRandomRoomNumber(Model model, @ModelAttribute("uuid") final String uuid) {
//        return mainService.requestRandomRoomNumber(model, uuid);
//    }
//}

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
