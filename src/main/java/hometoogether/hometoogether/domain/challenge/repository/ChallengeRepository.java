package hometoogether.hometoogether.domain.challenge.repository;

import hometoogether.hometoogether.domain.challenge.domain.Challenge;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    List<Challenge> findTop5ByOrderByTrial_countDesc();
}
