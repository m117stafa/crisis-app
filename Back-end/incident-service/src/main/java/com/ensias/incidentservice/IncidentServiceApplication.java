package com.ensias.incidentservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients(
        basePackages = "org.tuto.clients"
)
public class IncidentServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(IncidentServiceApplication.class, args);
    }

}
