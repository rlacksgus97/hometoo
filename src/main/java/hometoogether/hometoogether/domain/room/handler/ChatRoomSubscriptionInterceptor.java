package hometoogether.hometoogether.domain.room.handler;

//import hometoogether.hometoogether.config.security.JwtTokenProvider;
import hometoogether.hometoogether.domain.room.repository.RoomRepository;
//import hometoogether.hometoogether.domain.user.domain.User;
//import hometoogether.hometoogether.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.*;

@Slf4j
@RequiredArgsConstructor
@Component
public class ChatRoomSubscriptionInterceptor implements ChannelInterceptor {

    private final RoomRepository chatRoomRepository;
//    private final UserRepository userRepository;
//    @Resource
//    private final Map<Long, Set<String>> roomId2SessionIDs;
//    @Resource
//    private final Map<String, Long> sessionId2RoomId;
//    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        String sessionId = accessor.getSessionId();
        accessor.setLeaveMutable(false);
//        String token = accessor.getFirstNativeHeader("Authorization");
//        if (token != null && jwtTokenProvider.validateToken(token)) {
//            Authentication authentication = jwtTokenProvider.getAuthentication(token);
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//        }

//        else {
//            SecurityContextHolder.getContext().setAuthentication(null);
//        }

        switch (accessor.getCommand()) {
            case SUBSCRIBE:
                System.out.println("Subscribe");
                log.info("subscribe destination : {}", accessor.getDestination());
//                if(accessor.getDestination().startsWith("/sub/chat/")) {
//                    if (!validateSubscription(accessor.getDestination(), accessor.getUser().getName())) {
//                        throw new IllegalArgumentException("해당 유저는 이 채팅방의 유저가 아닙니다");
//                    }
//                }
//                else {
//                    break;
//                }

//                Long roomId = getRoomIdFromDestination(accessor.getDestination());
//                addSessionUser(roomId, sessionId);
                System.out.println("CONNECTED");
                break;
            case DISCONNECT:
//                removeSessionUser(sessionId);
                break;
            case CONNECT:

                break;

            default:
                break;
        }

        return message;
    }

//    private boolean validateSubscription(String destination, String username) {
//        if (destination.startsWith("/sub/chat/")) {
//            Long roomId = getRoomIdFromDestination(destination);
//            ChatRoom room = chatRoomRepository.findByRoomId(roomId)
//                    .orElseThrow(() -> new NoSuchElementException("해당 채팅방이 존재하지 않습니다"));
//            User user = userRepository.findByEmail(username)
//                    .orElseThrow(() -> new NoSuchElementException("해당 유저가 존재하지 않습니다"));
//            if (!room.isParticipant(user.getId())) {
//                return false;
//            }
//        }
//        return true;
//    }

    private Long getRoomIdFromDestination(String destination) {
        try {
            return Long.valueOf(destination.split("/")[3]);
        }
        catch (Exception e) {
            log.info("잡았따!");
            return null;
        }
    }

//    public void addSessionUser(Long roomId, String sessionId) {
//        sessionId2RoomId.put(sessionId, roomId);
//        if(roomId2SessionIDs.containsKey(roomId)) {
//            roomId2SessionIDs.get(roomId).add(sessionId);
//        }
//        else {
//            roomId2SessionIDs.put(roomId, new HashSet<>(Arrays.asList(sessionId)));

//        }
//        sessionId2RoomId.forEach((key, val) -> log.info("key = {}, val = {}", key, val));
//    }

//    public void removeSessionUser(String sessionId) {
//        if(sessionId2RoomId.containsKey(sessionId)) {
//            roomId2SessionIDs.remove(sessionId2RoomId.get(sessionId));
//            sessionId2RoomId.remove(sessionId);
//            System.out.println("DISCONNECTED");
//            sessionId2RoomId.forEach((key, val) -> log.info("key = {}, val = {}", key, val));
//        }
//        sessionId2RoomId.forEach((key, val) -> log.info("key = {}, val = {}", key, val));
//    }

//    public void removeSessionUser(String sessionId) {
//        if(sessionId2RoomId.containsKey(sessionId)) {
//            roomId2SessionIDs.remove(sessionId2RoomId.get(sessionId));
//            sessionId2RoomId.remove(sessionId);
//            System.out.println("DISCONNECTED");
//            sessionId2RoomId.forEach((key, val) -> log.info("key = {}, val = {}", key, val));
//        }
//    }
}