package com.ensias.incidentservice.controller;

import com.ensias.incidentservice.model.Incident;
import com.ensias.incidentservice.model.enums.Urgency;
import com.ensias.incidentservice.service.IncidentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/incident")
public class IncidentController {
    private final IncidentService incidentService;

    public IncidentController(IncidentService incidentService) {
        this.incidentService = incidentService;
    }

    @GetMapping("")
    public ResponseEntity<List<Incident>> getAllIncidents() {
        return ResponseEntity.ok(incidentService.getAllIncidents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Incident> getIncidentById(@PathVariable String id) {
        return ResponseEntity.ok(incidentService.getIncidentById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Incident>> getIncidentsByTitle(@RequestParam String title) {
        return ResponseEntity.ok(incidentService.getIncidentsByTitle(title));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Incident>> getIncidentsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(incidentService.getIncidentsByUserId(userId));
    }

    @GetMapping("/urgency/{urgency}")
    public ResponseEntity<List<Incident>> getIncidentsByUrgency(@PathVariable Urgency urgency) {
        return ResponseEntity.ok(incidentService.getIncidentsByUrgency(urgency));
    }

    @PostMapping("")
    public ResponseEntity<Incident> saveIncident(@RequestBody Incident incident) {
        return ResponseEntity.ok(incidentService.saveIncident(incident));
    }

    @PutMapping("")
    public ResponseEntity<Incident> updateIncident(@RequestBody Incident incident) {
        return ResponseEntity.ok(incidentService.saveIncident(incident));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteIncident(@PathVariable String id) {
        if (incidentService.deleteIncident(id)){
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

}
