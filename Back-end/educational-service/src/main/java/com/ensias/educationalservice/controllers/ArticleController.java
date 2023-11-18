package com.ensias.educationalservice.controllers;


import com.ensias.educationalservice.module.Article;
import com.ensias.educationalservice.services.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;


    @GetMapping
    public ResponseEntity<List<Article>> getAllArticles() {
        List<Article> articles = articleService.getAllArticles();
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable String id) {
        return articleService.getArticleById(id)
                .map(article -> new ResponseEntity<>(article, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/byAuthor/{authorId}")
    public ResponseEntity<List<Article>> getArticlesByAuthor(@PathVariable String authorId) {

        List<Article> articles = articleService.getArticlesByAuthorId(authorId);
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @GetMapping("/byTitle")
    public ResponseEntity<List<Article>> getArticlesByTitle(@RequestBody String title) {
        List<Article> articles = articleService.getArticlesByTitle(title);
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @GetMapping("/byTags")
    public ResponseEntity<List<Article>> getArticlesByTags(@RequestParam List<String> tags) {
        List<Article> articles = articleService.getArticlesByTags(tags);
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        Article createdArticle = articleService.createArticle(article);
        return new ResponseEntity<>(createdArticle, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable String id) {
        articleService.deleteArticle(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //TODO: Add other methods as needed for specific operations

}
