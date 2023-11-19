package com.ensias.educationalservice.module;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "authors")
public class Author {
    @Id
    private String id;
    private String name;
    private String email;
    private String imageUrl;
}
