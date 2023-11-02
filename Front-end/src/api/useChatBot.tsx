import { useState } from "react";

export function useChatbot() {
	const [chatData, setChatData] = useState<string[]>([]);

	// Send a POST request to your server to initiate the SSE connection
	fetch("http://localhost:8080/api/v1/chatgpt/chat", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ message: "hello chat gpt" }),
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to start SSE connection");
			}

			const eventSource = new EventSource("http://localhost:8080/api/v1/chatgpt/chat");

			eventSource.onmessage = (event) => {
				// Handle the incoming SSE event
				const newData = JSON.parse(event.data);
				setChatData((prevData) => [...prevData, newData]);
			};

			eventSource.onerror = (error) => {
				console.error("SSE Error:", error);
				eventSource.close();
			};

			// Clean up the event source connection when the component unmounts
			return () => {
				eventSource.close();
			};
		})
		.catch((error) => {
			console.error("SSE Connection Error:", error);
		});

        return chatData;
}
