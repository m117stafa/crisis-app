package com.ensias.incidentservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Data
@Builder
@Document(collection = "comments")
public class Comment {

    @Id
    private String id;
    private String content;
    private Long userId;

    @JsonIgnore
    @DocumentReference(lazy = true)
    private Incident incident;
}
