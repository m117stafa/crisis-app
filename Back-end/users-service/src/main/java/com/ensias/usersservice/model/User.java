package com.ensias.usersservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "_users")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    private String email;
    private String role;
    private String firstName;
    private String lastName;
    private String phone;
    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;
    private Integer age;
}
