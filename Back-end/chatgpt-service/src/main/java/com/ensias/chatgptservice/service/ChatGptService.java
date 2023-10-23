package com.ensias.chatgptservice.service;

import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ChatGptService {

    @Value("${openai.api.key}")
    private String TOKEN;

    public void Test(){
        OpenAiService openAiService = new OpenAiService(TOKEN);
        CompletionRequest completionRequest = CompletionRequest.builder()
                .prompt("Say This is a test !")
                .model("ada")
                .echo(true)
                .build();
        openAiService.createCompletion(completionRequest).getChoices().forEach(System.out::println);
    }
}
