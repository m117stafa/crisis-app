package com.ensias.chatgptservice.service;

import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.completion.chat.ChatCompletionChunk;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import com.theokanning.openai.service.OpenAiService;
import io.reactivex.Flowable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ChatGptService {
    @Value("${openai.api.key}")
    private String apiKey;


    public SseEmitter getChatEmitter(String message){
        OpenAiService openAiService = new OpenAiService(apiKey);
        SseEmitter emitter = new SseEmitter();

        List<ChatMessage> messages = createChatMessages(message);

        ChatCompletionRequest completionRequest = createCompletionRequest(messages);

        openAiService.streamChatCompletion(completionRequest)
                .subscribe(
                        chunk -> {
                            try {
                                emitter.send(chunk.getChoices().get(0).getMessage());
                            } catch (IOException e) {
                                emitter.completeWithError(e);
                            }
                        },
                        emitter::completeWithError,
                        emitter::complete
                );

        return emitter;
    }

    private List<ChatMessage> createChatMessages(String message) {
        ChatMessage systemMessage = new ChatMessage(ChatMessageRole.SYSTEM.value(),
                "I am in need of urgent medical advice for a health emergency. This prompt is specifically for health-related concerns, and I request responses solely within the context of medical emergencies. Please refrain from answering questions related to other domains. Your assistance is greatly appreciated.");
        ChatMessage userMessage = new ChatMessage(ChatMessageRole.USER.value(), message);

        return Arrays.asList(systemMessage, userMessage);
    }

    private ChatCompletionRequest createCompletionRequest(List<ChatMessage> messages) {
        return ChatCompletionRequest.builder()
                .model("gpt-3.5-turbo-0613")
                .messages(messages)
                .stream(true)
                .maxTokens(500)
                .build();
    }
}
