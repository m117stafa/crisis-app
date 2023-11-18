package com.ensias.incidentservice.model;

import com.ensias.incidentservice.model.enums.IncidentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "incidents")
public class Incident {

    @Id
    private String id;
    private String title;
    private String description;
    private IncidentType type;
    private Location location;
    private Long userId;
    private String imageUrl;
}
