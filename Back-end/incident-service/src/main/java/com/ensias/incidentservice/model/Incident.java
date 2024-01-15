package com.ensias.incidentservice.model;

import com.ensias.incidentservice.model.enums.IncidentType;
import com.ensias.incidentservice.model.enums.Urgency;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "incidents")
public class Incident {

    @Id
    private String id;
    private String title;
    private String description;
    private LocalDateTime date;
    private IncidentType type;
    private Location location;
    private Long userId;
    private String imageUrl;
    private String videoUrl;
    private Urgency urgency;
    private Long upVotes;
    private Long downVotes;

    @DocumentReference()
    private List<Comment> comments;
}
