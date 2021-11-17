package hometoogether.hometoogether.domain.training.repository;

import hometoogether.hometoogether.domain.training.Domain.Training;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainingRepository extends JpaRepository<Training, Long> {
}
