package hometoogether.hometoogether.domain.pose.repository;

import hometoogether.hometoogether.domain.pose.domain.PoseInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PoseInfoRepository extends JpaRepository<PoseInfo, Long> {
}
