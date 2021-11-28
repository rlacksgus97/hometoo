package hometoogether.hometoogether.domain.user.domain;//package hometoogether.hometoogether.domain.user.domain;
//
//import lombok.*;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//@Entity
//public class User implements UserDetails {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String name;
//    private String email;
//    private int age;
//    private String password;
//
//    @ElementCollection(fetch = FetchType.EAGER)
//    @Builder.Default
//    private List<String> roles = new ArrayList<>();
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return this.roles.stream().map(
//                SimpleGrantedAuthority::new
//        ).collect(Collectors.toList());
//
//    }
//
//    @Override
//    public String getUsername() {
//        return email;
//    }
//
//    @Override
//    public String getPassword() {
//        return password;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
//}

import hometoogether.hometoogether.domain.pose.domain.ChallengePose;
import hometoogether.hometoogether.domain.pose.domain.TrialPose;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@Setter
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    @Column(name = "routine_id")
    private Long routineId;

    @Column(name = "forum_id")
    private Long forumId;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    public void update(String password) {
        this.password = password;
    }

    @OneToMany
    private List<ChallengePose> challengePoseList;

    public void addChallengePose(ChallengePose challengePose) {
        challengePose.setUser(this);
        this.challengePoseList.add(challengePose);
    }

    @OneToMany
    private List<TrialPose> trialPoseList;

    public void addTrialPose(TrialPose trialPose) {
        trialPose.setUser(this);
        this.trialPoseList.add(trialPose);
    }

    @Builder
    private User(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

}
