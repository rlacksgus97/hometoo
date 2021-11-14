package hometoogether.hometoogether.domain.room.controller;

import hometoogether.hometoogether.domain.room.service.JspRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequiredArgsConstructor
public class JspRoomController {

    private final JspRoomService mainService;

    /**
     * home 접속시 실행
     */
//    @GetMapping("/room/create")
    public String displayMainPage(Model model, final Long id, final String uuid) {
        return this.mainService.displayMainPage(model, id, uuid);
    }

    /**
     * room 만들때 실행됨
     * @param max_num
     * @param uuid
     * @param binding
     * @return
     */
//    @PostMapping(value = "/room", params = "action=create")
    public String processRoomSelection(Model model, @ModelAttribute("max_num") final String max_num,
                                       @ModelAttribute("uuid") final String uuid, final BindingResult binding) {
        System.out.println("uuid = " + uuid);
        System.out.println("max_num = " + max_num);
        return this.mainService.processRoomSelection(model, max_num, uuid, binding);
    }

    /**
     * 채팅방에 입장할때 실행됨 (채팅방 id 와 입장 uuid 필요)
     */
    @GetMapping("/room/{sid}/user/{uuid}")
    public String displaySelectedRoom(Model model, @PathVariable("sid") final String sid, @PathVariable("uuid") final String uuid) {
        return this.mainService.displaySelectedRoom(model, sid, uuid);
    }

    /**
     * 채팅방에서 나갈때 실행됨
     */
//    @GetMapping("/room/{sid}/user/{uuid}/exit")
    public String processRoomExit(@PathVariable("sid") final String sid, @PathVariable("uuid") final String uuid) {
        return this.mainService.processRoomExit(sid, uuid);
    }

    @GetMapping("/room/random")
    public String requestRandomRoomNumber(Model model, @ModelAttribute("uuid") final String uuid) {
        return mainService.requestRandomRoomNumber(model, uuid);
    }
}
