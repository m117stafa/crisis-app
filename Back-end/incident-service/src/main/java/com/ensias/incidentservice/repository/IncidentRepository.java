package com.ensias.incidentservice.repository;

import com.ensias.incidentservice.model.Incident;
import com.ensias.incidentservice.model.enums.Urgency;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncidentRepository extends MongoRepository<Incident, String> {
    List<Incident> findByTitleContainsIgnoreCase(String title);

    List<Incident> findByUserId(Long userId);

    List<Incident> findByUrgency(Urgency urgency);
}
