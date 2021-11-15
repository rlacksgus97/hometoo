package hometoogether.hometoogether.domain.user.service;

import hometoogether.hometoogether.config.jwt.JwtTokenProvider;
import hometoogether.hometoogether.domain.user.domain.LoginRequest;
import hometoogether.hometoogether.domain.user.domain.SignUpRequest;
import hometoogether.hometoogether.domain.user.domain.User;
import hometoogether.hometoogether.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.transaction.Transactional;
import java.net.URI;
import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class UserService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public String signIn(LoginRequest loginRequest) throws Exception {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        } catch (Exception e) {
            throw new Exception("inavalid username/password");
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return tokenProvider.generateToken(authentication);
    }

    @Transactional
    public String singUp(SignUpRequest signUpRequest) {
        if (userRepository.existsUserByEmail(signUpRequest.getEmail())) {
//            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"), HttpStatus.BAD_REQUEST);
            return "EXIST";
        }

//        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
//            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"), HttpStatus.BAD_REQUEST);
//        }

        // Creating user's account
//        User user = new User(signUpRequest.getName(), signUpRequest.getUsername(), signUpRequest.getEmail(), signUpRequest.getPassword());
        signUpRequest.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        User user = signUpRequest.toEntity();
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        Role userRole = roleRepository.findByName(RoleName.ROLE_USER) .orElseThrow(() -> new AppException("User Role not set."));
//        user.setRoles(Collections.singleton(userRole));
        User result = userRepository.save(user);
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/users/{username}") .buildAndExpand(result.getEmail()).toUri();
//        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully")); }
        return String.valueOf(location);
    }

}
