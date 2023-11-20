package com.ensias.incidentservice.service;

import com.ensias.incidentservice.model.Incident;
import com.ensias.incidentservice.model.enums.Urgency;
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

    public List<Incident> getIncidentsByUserId(Long userId) {
        return incidentRepository.findByUserId(userId);
    }

    public List<Incident> getIncidentsByUrgency(Urgency urgency) {
        return incidentRepository.findByUrgency(urgency);
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

    public Incident addVote(String id, boolean isUpVote) {
        Optional<Incident> incident = incidentRepository.findById(id);
        if (incident.isPresent()) {
            Incident incident1 = incident.get();
            if (isUpVote) {
                incident1.setUpVotes(incident1.getUpVotes() + 1);
            } else {
                incident1.setDownVotes(incident1.getDownVotes() + 1);
            }
            return incidentRepository.save(incident1);
        } else {
            throw new RuntimeException("Incident not found for id : " + id);
        }
    }

    public Incident removeVote(String id, boolean isUpVote) {
        Optional<Incident> incident = incidentRepository.findById(id);
        if (incident.isPresent()) {
            Incident incident1 = incident.get();
            if (isUpVote) {
                incident1.setUpVotes(incident1.getUpVotes() - 1);
            } else {
                incident1.setDownVotes(incident1.getDownVotes() - 1);
            }
            return incidentRepository.save(incident1);
        } else {
            throw new RuntimeException("Incident not found for id : " + id);
        }
    }


}
