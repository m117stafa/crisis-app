package com.ensias.educationalservice.services;

import com.ensias.educationalservice.module.Article;
import com.ensias.educationalservice.module.Author;
import com.ensias.educationalservice.repositories.ArticleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public Optional<Article> getArticleById(String id) {
        return articleRepository.findById(id);
    }

    public List<Article> getArticlesByTitle(String title) {
        return articleRepository.findByTitleContainsIgnoreCase(title);
    }


    public List<Article> getArticlesByTags(List<String> tags) {
        return articleRepository.findByTags(tags);
    }

    public Article createArticle(Article article) {
        // Perform any necessary business logic/validation before saving
        return articleRepository.save(article);
    }

    public void deleteArticle(String id) {
        articleRepository.deleteById(id);
    }

    public List<Article> getArticlesByAuthorId(String authorId) {
        return articleRepository.findByAuthorId(authorId);
    }
}
