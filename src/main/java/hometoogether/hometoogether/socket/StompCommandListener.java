package hometoogether.hometoogether.socket;

import hometoogether.hometoogether.config.security.JwtTokenProvider;
import hometoogether.hometoogether.domain.room.domain.Room;
import hometoogether.hometoogether.domain.room.domain.WebSocketMessage;
import hometoogether.hometoogether.domain.room.dto.WebSocketMessageDto;
import hometoogether.hometoogether.domain.room.service.MainRoomService;
import hometoogether.hometoogether.domain.room.service.RoomService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class StompCommandListener {

    private final SimpMessagingTemplate messagingTemplate;
//    private final JwtTokenProvider jwtTokenProvider;
    private final MainRoomService mainRoomService;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());


    @Getter
    List<String> socketParticipateUserList = new ArrayList<String>();
    List<String> socketSessionList = new ArrayList<String>();

//    private Map<String, String> sessionId2UserEmailMap = new HashMap<>();
//    private Map<String, Match> sessionId2Match = new HashMap<>();
    private Map<String, Room> sessionId2Room = new HashMap<>();
    private Map<String, Room> uuid2Room = new HashMap<>();
    private Map<String, String> sessionId2uuid = new HashMap<>();


    private static final String MSG_TYPE_OFFER = "offer";
    private static final String MSG_TYPE_ANSWER = "answer";
    private static final String MSG_TYPE_ICE = "ice";
    private static final String MSG_TYPE_JOIN = "join";
    private static final String MSG_TYPE_LEAVE = "leave";


    @EventListener
    public void handleConnectEvent(SessionConnectEvent event) {
        try {
            socketParticipateUserList.add(event.getUser().getName());
        }catch(Exception e) {

        }
        socketSessionList.add(event.getMessage().getHeaders().get("simpSessionId").toString());

    }


    @EventListener
    public void handleDisconnectEvent(SessionDisconnectEvent event){
        try {
            socketParticipateUserList.remove(event.getUser().getName());
        }catch(Exception e) {

        }
        String sessionId = event.getMessage().getHeaders().get("simpSessionId").toString();
        socketSessionList.remove(sessionId);

        if(sessionId2Room.containsKey(sessionId)) {
            Room room = sessionId2Room.get(sessionId);
            removeUserFromRoom(sessionId);

            int count = countUserOfRoom(room);
            logger.info("Disconnect : 현재 이 방의 클라이언트 수: {}", count);
            if (count <= 1) {
                for (Map.Entry<String, Room> cli : uuid2Room.entrySet()) {
                    sendMessage(cli.getKey(), new WebSocketMessage(
                            "Server",
                            MSG_TYPE_JOIN,
                            "false",
                            null,
                            null));
                }
            }
        }

    }

    @MessageMapping("/video-signal")
    public void handleTextMessage(WebSocketMessageDto textMessage, SimpMessageHeaderAccessor headerAccessor) {
        WebSocketMessage message = textMessage.toEntity();
//        Authentication authentication = getAuthentication(headerAccessor);
//        logger.info(authentication.getName());
        String sessionId = headerAccessor.getSessionId();

        logger.debug("[ws] Message of {} type from {} received", message.getType(), message.getFrom());
        String userName = message.getFrom(); // origin of the message,, uuid
        String data = message.getData(); // payload

        Room room;
        switch (message.getType()) {
            case MSG_TYPE_OFFER:
            case MSG_TYPE_ANSWER:
            case MSG_TYPE_ICE:
                Object candidate = message.getCandidate();
                Object sdp = message.getSdp();
                room = sessionId2Room.get(sessionId);

                if(room != null) {
                    List<String> uuidOfMatch = uuidListOfRoom(room);

                    uuidOfMatch.forEach(
                            (uuid)-> {
                                if(!uuid.equals(userName)) {
                                    sendMessage(
                                            uuid, new WebSocketMessage(
                                                    userName,
                                                    message.getType(),
                                                    data,
                                                    candidate,
                                                    sdp)
                                    );
                                }});

                }

                break;

            case MSG_TYPE_JOIN:
                logger.info("[ws] {} has joined Room: #{}", userName, message.getData());

                room = mainRoomService.findByRoomId(Long.valueOf(data));
//                sessionId2UserEmailMap.put(sessionId, authentication.getName());
                sessionId2Room.put(sessionId, room);
                uuid2Room.put(userName, room);
                sessionId2uuid.put(sessionId, userName);

//                int userCount = countUserOfMatch(match);
                long userCount=socketParticipateUserList.stream().count();
                logger.info("Join: 현재 {} 방의 클라이언트 수: {}", room.getId(), userCount);

                String offerData = "true";

                if(userCount <=1) {
                    offerData= "false";
                }

                sendMessage(userName, new WebSocketMessage(
                        "Server",
                        MSG_TYPE_JOIN,
                        offerData,
                        null,
                        null));


                break;

            case MSG_TYPE_LEAVE:
                logger.info("[ws] {} is going to leave Room: #{}", userName, message.getData());
                break;

            default:
                logger.debug("[ws] Type of the received message {} is undefined!", message.getType());
        }

    }
    private void sendMessage(String uuid, WebSocketMessage message) {
        System.out.println("StompCommandListener.sendMessage");
        messagingTemplate.convertAndSend("/sub/video-signal/" + uuid, message);
    }
//    private Authentication getAuthentication(SimpMessageHeaderAccessor accessor) {
//        String token = accessor.getFirstNativeHeader("Authorization");
//        return jwtTokenProvider.getAuthentication(token);
//    }

    int countUserOfRoom(Room room) {
        int count = 0;

        for(Map.Entry<String, Room> uuidMatch : uuid2Room.entrySet())  {
            if(uuidMatch.getValue().getId() == room.getId()) {
                count++;
            }
        }
        return count;
    }

    List<String> uuidListOfRoom(Room room) {
        List<String> uuidList = new ArrayList<>();

        for(Map.Entry<String, Room> uuidRoom : uuid2Room.entrySet())  {
            if(uuidRoom.getValue().getId() == room.getId()) {
                uuidList.add(uuidRoom.getKey());
            }
        }

        return uuidList;
    }

    public void removeUserFromRoom(String sessionId) {
        sessionId2Room.remove(sessionId);
//        sessionId2UserEmailMap.remove(sessionId);
        String userName = sessionId2uuid.get(sessionId);
        sessionId2uuid.remove(sessionId);
        uuid2Room.remove(userName);

    }
}
