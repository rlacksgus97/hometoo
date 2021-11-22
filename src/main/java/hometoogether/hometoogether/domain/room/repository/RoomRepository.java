package hometoogether.hometoogether.domain.room.repository;

import hometoogether.hometoogether.domain.room.domain.Room;
import hometoogether.hometoogether.domain.training.Domain.Routine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {
    Optional<Routine> findByRoutineId(Long routineId);
}
