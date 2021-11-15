package hometoogether.hometoogether.domain.user.repository;

import hometoogether.hometoogether.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findUserByEmail(String email);
    public boolean existsUserByEmail(String email);
}
