////package hometoogether.hometoogether.config;
////
////import hometoogether.hometoogether.socket.SignalHandler;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.web.socket.config.annotation.EnableWebSocket;
////import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
////import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
////import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;
////
////@Configuration
////@EnableWebSocket
////public class WebSocketConfig implements WebSocketConfigurer {
////
////    @Autowired
////    private SignalHandler signalHandler;
////
////    @Override
////    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
////        // Client에서는 GET /signal를 호출해서 Server의 정보를 취득하며,
////        // WebSocketHandlerRegistry에 WebSocketHandler의 구현체를 등록한다.
////        // 등록된 Handler는 특정 endpoint("/signal")로 handshake를 완료한 후 맺어진 connection의 관리
////        registry.addHandler(signalHandler, "/signal")
////                .setAllowedOrigins("*"); // allow all origins <-pub,sub의 sub
////    }
////
////
////    @Bean
////    public ServletServerContainerFactoryBean createWebSocketContainer() {
////        ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();
////        container.setMaxTextMessageBufferSize(8192);
////        container.setMaxBinaryMessageBufferSize(8192);
////        return container;
////    }
////}
//
//import hometoogether.hometoogether.domain.room.handler.ChatRoomSubscriptionInterceptor;
//import hometoogether.hometoogether.domain.room.handler.CustomHandshakeHandler;
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.Ordered;
//import org.springframework.core.annotation.Order;
//import org.springframework.messaging.simp.config.ChannelRegistration;
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.scheduling.annotation.EnableScheduling;
//import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
//import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
//import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
//import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;
//
//@EnableScheduling
//@Configuration
//@EnableWebSocketMessageBroker
//@RequiredArgsConstructor
//@Order(Ordered.HIGHEST_PRECEDENCE + 99)
//public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
//
//    private final ChatRoomSubscriptionInterceptor chatRoomSubscriptionInterceptor;
//
//    @Override
//    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        registry.addEndpoint("/ws-stomp")
//                .setAllowedOrigins("http://localhost:8080",
//                        "http://localhost:3000"
////                        "http://2a97-58-122-7-167.ngrok.io", // ngrok를 사용하기 때문에 도메인이 바뀔 수 있음
////                        "https://2a97-58-122-7-167.ngrok.io"
//                ) // ngrok를 사용하기 때문에 도메인이 바뀔 수 있음
//                .setHandshakeHandler(new CustomHandshakeHandler())
//                .withSockJS();
//    }
//
//    @Override
//    public void configureMessageBroker(MessageBrokerRegistry registry) {
//        registry.enableSimpleBroker("/sub");
//        registry.setApplicationDestinationPrefixes("/pub");
//    }
//
//    @Override
//    public void configureClientInboundChannel(ChannelRegistration registration) {
//        registration.interceptors(chatRoomSubscriptionInterceptor);
//    }
//
//    @Bean
//    public ServletServerContainerFactoryBean createWebSocketContainer() {
//        ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();
//        container.setMaxTextMessageBufferSize(8192);
//        container.setMaxBinaryMessageBufferSize(8192);
//        return container;
//    }
//}