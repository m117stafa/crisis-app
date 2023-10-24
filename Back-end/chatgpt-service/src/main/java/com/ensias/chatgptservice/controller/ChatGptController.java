package com.ensias.chatgptservice.controller;

import com.ensias.chatgptservice.service.ChatGptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/chatgpt")
public class ChatGptController {

    @Autowired
    private ChatGptService chatGptService;

    @PostMapping ("/")
    public ResponseEntity<String> getChatGpt(@RequestBody String message) {
        return ResponseEntity.ok(chatGptService.Test(message));
    }
}
