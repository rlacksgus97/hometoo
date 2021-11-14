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

//package hometoogether.hometoogether.domain.user.service;
//
//import hometoogether.hometoogether.config.security.JwtTokenProvider;
//import hometoogether.hometoogether.domain.user.domain.User;
//import hometoogether.hometoogether.domain.user.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.Map;
//
//@RequiredArgsConstructor
//@Service
//public class UserService {
//
//    private final UserRepository userRepository;
//
//    public Long join(Map<String, String> user , PasswordEncoder passwordEncoder){
//
//        userRepository.findByEmail(user.get("email")).ifPresent((m -> {
//            throw new IllegalStateException("Already signed up!");
//        }));
//
//        return userRepository.save(User.builder()
//                .email(user.get("email"))
//                .name(user.get("name"))
//                .password(passwordEncoder.encode(user.get("password")))
//                .age(Integer.valueOf(user.get("age")))
//                .build()).getId();
//    }
//
//    public String login(Map<String, String> user, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider){
//        User user2 = userRepository.findByEmail(user.get("email"))
//                .orElseThrow(() -> new IllegalArgumentException("Not signed up yet"));
//
//        if (!passwordEncoder.matches(user.get("password"), user2.getPassword())) {
//            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
//        }
//        return jwtTokenProvider.createToken(user2.getUsername(), user2.getRoles());
//    }
//}
