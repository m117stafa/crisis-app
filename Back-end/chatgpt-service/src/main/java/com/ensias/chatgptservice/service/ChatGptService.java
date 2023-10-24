package com.ensias.chatgptservice.service;

import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatGptService {

    @Value("${openai.api.key}")
    private String TOKEN;


    public String Test(String message){
        OpenAiService openAiService = new OpenAiService(TOKEN);
        List<ChatMessage> messages = new ArrayList<>();
        ChatMessage userMessage = new ChatMessage(ChatMessageRole.USER.value(),message);
        messages.add(userMessage);
        ChatCompletionRequest completionRequest = ChatCompletionRequest.builder()
                .model("gpt-3.5-turbo-0613")
                .messages(messages)
                .maxTokens(150)
                .build();
        ChatMessage response = openAiService.createChatCompletion(completionRequest).getChoices().get(0).getMessage();
        return response.getContent();
    }
}
