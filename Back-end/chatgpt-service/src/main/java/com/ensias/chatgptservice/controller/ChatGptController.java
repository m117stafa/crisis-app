package com.ensias.chatgptservice.controller;

import com.ensias.chatgptservice.service.ChatGptService;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/chatgpt")
public class ChatGptController {

    @Autowired
    private ChatGptService chatGptService;


    @GetMapping("/chat")
    public SseEmitter chatEndpoint(@RequestParam String message) {
        return this.chatGptService.getChatEmitter(message);
    }
}

