package hometoogether.hometoogether.domain.user.domain;

import lombok.Getter;

@Getter
public class UserRequestDto {
    private String username;
    private String email;
    private String password;
}
