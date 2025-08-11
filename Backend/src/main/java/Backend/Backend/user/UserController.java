package Backend.Backend.user;

import Backend.Backend.config.Security.TokenService;
import Backend.Backend.user.DTO.JWTReponseDto;
import Backend.Backend.user.DTO.PegarLoginDto;
import Backend.Backend.user.DTO.UserLoginDto;
import Backend.Backend.user.DTO.UserRegisterDto;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserService userService;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid UserLoginDto request) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(request.login(), request.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new JWTReponseDto(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid UserRegisterDto request) {
        if (this.repository.findByLogin(request.login()) != null) {
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(request.password());
        User newuser = new User(request.login(), encryptedPassword, request.role());

        this.repository.save(newuser);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/pegaremail")
    public ResponseEntity<String> pegarEmail(@RequestBody PegarLoginDto request) {
        String user = userService.verificarUser(request.login());

        System.out.println("teste" + user);

        return ResponseEntity.ok(user);
    }
}
