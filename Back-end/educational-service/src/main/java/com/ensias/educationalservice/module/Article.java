package com.ensias.educationalservice.module;


import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(value="articles")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Article {

    @Id
    private String id;
    private String title;
    private String content;
    private Date publishDate;
    private List<String> tags;
    private Author author;
    private List<String> images;
    private String videoUrl;


}
