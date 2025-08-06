package Backend.Backend.user.DTO;

import Backend.Backend.user.UserRole;

public record UserRegisterDto(String login, String password, UserRole role) {
}
