package com.ensias.educationalservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EducationalServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EducationalServiceApplication.class, args);
    }

}
