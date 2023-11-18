package com.ensias.incidentservice.repository;

import com.ensias.incidentservice.model.Incident;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncidentRepository extends MongoRepository<Incident, String> {
    List<Incident> findByTitleContainsIgnoreCase(String title);
}
