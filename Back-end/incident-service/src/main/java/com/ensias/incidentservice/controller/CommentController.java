package com.ensias.incidentservice.controller;

import com.ensias.incidentservice.model.Comment;
import com.ensias.incidentservice.model.CommentRequest;
import com.ensias.incidentservice.model.Incident;
import com.ensias.incidentservice.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping("")
    public ResponseEntity<List<Comment>> getAllComments(){
        return ResponseEntity.ok(commentService.getAllComments());
    }

    @PostMapping("{incidentId}")
    public ResponseEntity<Incident> addComment(@PathVariable String incidentId,@RequestBody CommentRequest comment){
        Incident incident = commentService.addCommentToIncident(incidentId, comment.content());
        return ResponseEntity.ok(incident);
    }
}
