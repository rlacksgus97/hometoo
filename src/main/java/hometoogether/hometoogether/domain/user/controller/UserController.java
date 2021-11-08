package hometoogether.hometoogether.domain.user.controller;

import hometoogether.hometoogether.domain.user.domain.UserRequestDto;
import hometoogether.hometoogether.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;

    @PostMapping("/users")
    public Long save(@RequestBody UserRequestDto param){
        System.out.println("param.getUsername() = " + param.getUsername());
        return userService.saveUser(param);
    }
}
