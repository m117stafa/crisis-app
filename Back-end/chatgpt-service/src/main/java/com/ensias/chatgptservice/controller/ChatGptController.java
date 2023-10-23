package com.ensias.chatgptservice.controller;

import com.ensias.chatgptservice.service.ChatGptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/chatgpt")
public class ChatGptController {

    @Autowired
    private ChatGptService chatGptService;

    @GetMapping("/")
    public void getChatGpt() {
        chatGptService.Test();
    }
}
