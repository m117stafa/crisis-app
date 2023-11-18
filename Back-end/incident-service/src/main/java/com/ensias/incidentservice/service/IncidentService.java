package com.ensias.incidentservice.service;

import com.ensias.incidentservice.model.Incident;
import com.ensias.incidentservice.repository.IncidentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IncidentService {
    private final IncidentRepository incidentRepository;

    public IncidentService(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    public Incident saveIncident(Incident incident) {
        return incidentRepository.save(incident);
    }

    public Incident getIncidentById(String id) {
        Optional<Incident> incident = incidentRepository.findById(id);
        if (incident.isPresent()) {
            return incident.get();
        } else {
            throw new RuntimeException("Incident not found for id : " + id);
        }
    }

    public List<Incident> getIncidentsByTitle(String title) {
        return incidentRepository.findByTitleContainsIgnoreCase(title);
    }

    public boolean deleteIncident(String id) {
        Optional<Incident> incident = incidentRepository.findById(id);
        if (incident.isPresent()) {
            incidentRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }


}
