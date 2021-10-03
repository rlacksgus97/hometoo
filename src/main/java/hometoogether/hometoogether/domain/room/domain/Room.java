package hometoogether.hometoogether.domain.room.domain;

import lombok.NoArgsConstructor;
import org.springframework.web.socket.WebSocketSession;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Entity
@NoArgsConstructor
public class Room {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    // sockets by user names

    // WebSocketSession은 spring에서 WebSocket connection이 맺어진 세션을 가리킨다 - 편하게 고수준 socket이라고 생각
    //
//    private final Map<String, WebSocketSession> clients = new HashMap<>();

    public Room(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Map<String, WebSocketSession> getClients() {
        // 위의 client 문제 때문에 임의로 getClients 함수 안에 clients 변수를 설정함 나중에 복구 예정
        Map<String, WebSocketSession> clients = new HashMap<>();
        return clients;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final Room room = (Room) o;
        return Objects.equals(getId(), room.getId()) &&
                Objects.equals(getClients(), room.getClients());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getClients());
    }
}
