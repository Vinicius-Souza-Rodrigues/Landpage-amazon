package Backend.Backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return repository.findByLogin(username);
    }

    public String verificarUser(String user) {
         UserDetails usuario = repository.findByLogin(user);
         if (usuario != null) {
             return usuario.getUsername();
         } else {
             return "not-found";
         }
    }
}
