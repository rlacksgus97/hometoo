package hometoogether.hometoogether.domain.user.controller;

import hometoogether.hometoogether.common.ApiResponse;
import hometoogether.hometoogether.common.JwtAuthenticationResponse;
import hometoogether.hometoogether.config.jwt.JwtTokenProvider;
import hometoogether.hometoogether.domain.user.domain.LoginRequest;
import hometoogether.hometoogether.domain.user.domain.SignUpRequest;
import hometoogether.hometoogether.domain.user.repository.UserRepository;
import hometoogether.hometoogether.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) throws Exception {
        return ResponseEntity.ok(new JwtAuthenticationResponse(userService.signIn(loginRequest)));
//        try {
//            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
//        } catch (Exception e) {
//            throw new Exception("invalid");
//        }
//
//        return jwtTokenProvider.generateToken()
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequest signUpRequest) {
        String result = userService.singUp(signUpRequest);

        if (result.equals("EXIST")) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"), HttpStatus.BAD_REQUEST);
        } else {
            return ResponseEntity.created(URI.create(result)).body(new ApiResponse(true, "User registered successfully"));
        }
    }

}
