import React, { useEffect, useState } from "react";
import { useChatbot } from "../api/useChatBot";

const Chatbot = () => {
	const [chatData, setChatData] = useState<string[]>([]);
	const [chatHistory, setChatHistory] = useState<Array<string[]>>([]);
	const [input, setInput] = useState<string>("");

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const sendChatData = (input: string) => {
		setChatHistory((prevData) => [...prevData, chatData]);
		setChatData([]);
		setInput("");
		const eventSource = new EventSource(
			`http://localhost:8080/api/v1/chatgpt/chat?message=${input}`
		);

		eventSource.onmessage = (event) => {
			const newData = JSON.parse(event.data);
			// Handle the incoming SSE event
			if (newData.content !== null) {
				setChatData((prevData) => [...prevData, newData.content]);
			}
		};

		eventSource.onerror = (error) => {
			console.error("SSE Error:", error);
			eventSource.close();
		};

		// Clean up the event source connection when the component unmounts
	};

	return (
		<div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
			<h1>Chat Responses</h1>
			<ol>
				<li>
					{chatHistory.map((item, index) => (
						<li key={index}>
							{item.map((message) => `${message}`)}
						</li>
					))}
				</li>
				<li>{chatData.map((item) => `${item}`)}</li>
			</ol>
			<input
				type="text"
				className="border-black border-2"
				onChange={handleInput}
				value={input}
			/>
			<button onClick={() => sendChatData(input)}>Send</button>
		</div>
	);
};

export default Chatbot;
