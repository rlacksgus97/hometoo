package hometoogether.hometoogether.domain.user.service;

import hometoogether.hometoogether.domain.user.domain.User;
import hometoogether.hometoogether.domain.user.domain.UserRequestDto;
import hometoogether.hometoogether.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public Long saveUser(UserRequestDto userRequestDto) {
        User user = User.builder()
                .username(userRequestDto.getUsername())
                .email(userRequestDto.getEmail())
                .password(userRequestDto.getPassword())
                .build();
        return userRepository.save(user).getId();
    }
}
