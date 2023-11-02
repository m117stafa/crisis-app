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
    @Value("${OPENAI_KEY}")
    private String apiKey;

    private final OpenAiService openAiService;

    public ChatGptService() {
        this.openAiService = new OpenAiService(apiKey);
    }


    public SseEmitter getChatEmitter(String message){
        SseEmitter emitter = new SseEmitter();

        List<ChatMessage> messages = createChatMessages(message);

        ChatCompletionRequest completionRequest = createCompletionRequest(messages);

        openAiService.streamChatCompletion(completionRequest)
                .subscribe(
                        chunk -> {
                            try {
                                emitter.send(chunk.getChoices().get(0).getMessage().getContent());
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
                "The following is a conversation with a doctor about a patient's symptoms. The doctor is a neural network, trained on patient-doctor conversations.");
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
