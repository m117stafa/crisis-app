package com.ensias.educationalservice.repositories;

import com.ensias.educationalservice.module.Article;
import com.ensias.educationalservice.module.Author;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends MongoRepository<Article,String> {

    List<Article> findByTitleContainsIgnoreCase(String title);

    List<Article> findByAuthorId(String authorId);

    List<Article> findByTags(List<String> tags);

}
