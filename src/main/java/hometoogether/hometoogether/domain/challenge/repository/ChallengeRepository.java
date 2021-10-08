package hometoogether.hometoogether.domain.challenge.repository;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
}
