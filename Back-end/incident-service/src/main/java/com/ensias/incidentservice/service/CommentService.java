package com.ensias.incidentservice.service;

import com.ensias.incidentservice.model.Comment;
import com.ensias.incidentservice.model.Incident;
import com.ensias.incidentservice.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final IncidentService incidentService;

    public Incident addCommentToIncident(String incidentId, String comment){
        Incident incident = incidentService.getIncidentById(incidentId);
        Comment newComment = createNewComment(comment, incident);
        saveComment(newComment);
        incident.getComments().add(newComment);
        System.out.println("Comment:"+ comment+ "added to incident: " + incidentId);
        return incidentService.saveIncident(incident);
    }

    public List<Comment> getAllComments(){
        return commentRepository.findAll();
    }

    private void saveComment(Comment comment){
        commentRepository.save(comment);
    }
    private Comment createNewComment(String comment, Incident incident) {
        return Comment.builder().content(comment).incident(incident).build();
    }
}
