//package hometoogether.hometoogether.config;
//
//import hometoogether.hometoogether.socket.SignalHandler;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.socket.config.annotation.EnableWebSocket;
//import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
//import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
//import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;
//
//@Configuration
//@EnableWebSocket
//public class WebSocketConfig implements WebSocketConfigurer {
//
//    @Autowired
//    private SignalHandler signalHandler;
//
//    @Override
//    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
//        // Client에서는 GET /signal를 호출해서 Server의 정보를 취득하며,
//        // WebSocketHandlerRegistry에 WebSocketHandler의 구현체를 등록한다.
//        // 등록된 Handler는 특정 endpoint("/signal")로 handshake를 완료한 후 맺어진 connection의 관리
//        registry.addHandler(signalHandler, "/signal")
//                .setAllowedOrigins("*"); // allow all origins <-pub,sub의 sub
//    }
//
//
//    @Bean
//    public ServletServerContainerFactoryBean createWebSocketContainer() {
//        ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();
//        container.setMaxTextMessageBufferSize(8192);
//        container.setMaxBinaryMessageBufferSize(8192);
//        return container;
//    }
//}
