package hometoogether.hometoogether.domain.room.domain;

//import hometoogether.hometoogether.domain.user.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.socket.WebSocketSession;

import javax.persistence.*;
import java.util.*;

@Entity
@NoArgsConstructor
public class Room {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Getter
    private Long max_num;

    @Setter @Getter
    private Long cur_num;

    // WebSocketSession은 spring에서 WebSocket connection이 맺어진 세션을 가리킨다 - 편하게 고수준 socket이라고 생각
//    @OneToMany(fetch = FetchType.LAZY)
//    private List<User> userList=new ArrayList<>();
//    private final Map<String, WebSocketSession> clients = new HashMap<>();

    public Room(Long num) {
        this.max_num = num;
        this.cur_num=0L;
    }

    public Long getId() {
        return id;
    }

//    public Map<String, WebSocketSession> getClients() {
//        // 위의 client 문제 때문에 임의로 getClients 함수 안에 clients 변수를 설정함 나중에 복구 예정
//        Map<String, WebSocketSession> clients = new HashMap<>();
//        return clients;
//    }

//    @Override
//    public boolean equals(final Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        final Room room = (Room) o;
//        return Objects.equals(getId(), room.getId()) &&
//                Objects.equals(getClients(), room.getClients());
//    }

//    @Override
//    public int hashCode() {
//
//        return Objects.hash(getId(), getClients());
//    }
}
