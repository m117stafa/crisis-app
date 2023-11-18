package com.ensias.educationalservice.module;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "authors")
public class Author {
    private String authorId;
    private String name;
    private String email;
    private String imageUrl;
}
