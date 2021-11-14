package hometoogether.hometoogether.domain.training.repository;

import hometoogether.hometoogether.domain.training.domain.Routine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoutineRepository extends JpaRepository<Routine, Long> {
    List<Routine> findAllByUserId(Long userId);

}
