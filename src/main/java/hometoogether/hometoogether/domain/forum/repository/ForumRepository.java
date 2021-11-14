package hometoogether.hometoogether.domain.forum.repository;

import hometoogether.hometoogether.domain.forum.domain.forum.Forum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumRepository extends JpaRepository<Forum, Long> {
}
