package hometoogether.hometoogether.config;

import hometoogether.hometoogether.config.jwt.JwtAuthenticationEntryPoint;
import hometoogether.hometoogether.config.jwt.JwtAuthenticationFilter;
import hometoogether.hometoogether.domain.user.service.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true, prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtAuthenticationEntryPoint unauthorizedHandler;
    private final CustomUserDetailsService customUserDetailsService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

//    @Bean
//    public JwtAuthenticationFilter jwtAuthenticationFilter() {
//        return new JwtAuthenticationFilter();
//    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//        authenticationManagerBuilder.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
        authenticationManagerBuilder.userDetailsService(customUserDetailsService);
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors()
//                .and().csrf().disable().exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
                .and().csrf().disable().authorizeRequests().antMatchers("/api/users/signin")
                .permitAll().anyRequest().permitAll()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//                .and().authorizeRequests()
//                .antMatchers(
//                        "/", "/favicon.ico", "/**/*.png",
//                        "/**/*.gif", "/**/*.svg", "/**/*.jpg",
//                        "/**/*.html", "/**/*.css", "/**/*.js").permitAll()
//                .antMatchers("/api/**").permitAll()
////                .permitAll().antMatchers("/api/user/checkUsernameAvailability", "/api/user/checkEmailAvailability")
////                .permitAll().antMatchers(HttpMethod.GET, "/api/**", "/api/**")
//                .anyRequest().permitAll();
//                .permitAll().anyRequest().permitAll();
//                .permitAll().anyRequest();
        // Add our custom JWT security filter
         http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    }

}
