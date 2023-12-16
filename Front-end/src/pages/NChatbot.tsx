import React, { useEffect, useState } from "react";
import { useChatbot } from "../hooks/useChatBot";

const NChatbot = () => {
	const [chatData, setChatData] = useState<string[]>([]);
	const [chatHistory, setChatHistory] = useState<string[]>([]);
	const [input, setInput] = useState<string>("");

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const sendChatData = (input: string) => {
		if (chatData.length > 0) {
			setChatHistory((prevData) => [...prevData, chatData.join("")]);
		}
		setChatHistory((prevData) => [...prevData, input]);
		setChatData([]);
		setInput("");
		const eventSource = new EventSource(
			`http://localhost:8080/chatgpt/chat?message=${input}`
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
		<>
			<div className="flex justify-center">
				<div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen w-[40%]">
					<div className="flex sm:items-center justify-between py-3 rounded-t-lg border-b-2 bg-gray-100 border-gray-200">
						<div className="relative flex items-center space-x-4 ">
							<div className="text-2xl mt-1 flex items-center">
								<span className="text-gray-700 mr-3 ml-2">
									Conversation with CrisisBot
								</span>
							</div>
						</div>
					</div>

					<div
						id="messages"
						className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
					>
						<div className="chat-message">
							<div className="flex items-end">
								<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
									<div>
										<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
											Hello, how I can help you know, I
											can speak Arabic, French, English
										</span>
									</div>
								</div>
								<img
									src="https://img.icons8.com/fluency/48/chatbot.png"
									alt="My profile"
									className="w-9 h-9 rounded-full order-1"
								/>
							</div>
							{chatHistory.map((message, index) => (
								<div className="chat-message" key={index}>
									{index % 2 !== 0 ? (
										<div className="flex items-end">
											<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
												<div>
													<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
														{message}
													</span>
												</div>
											</div>
											<img
												src="https://img.icons8.com/fluency/48/chatbot.png"
												alt="My profile"
												className="w-9 h-9 rounded-full order-1"
											/>
										</div>
									) : (
										<div className="flex items-end justify-end">
											<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
												<div>
													<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
														{message}
													</span>
												</div>
											</div>
											<img
												src="https://img.icons8.com/color/48/user.png"
												alt="My profile"
												className="w-10 h-10 rounded-full order-2"
											/>
										</div>
									)}
								</div>
							))}
							{/* Chatbot response */}
							{chatData.length > 0 && (
								<div className="chat-message">
									<div className="flex items-end">
										<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
											<div>
												<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
													{chatData.join("")}
												</span>
											</div>
										</div>
										<img
											src="https://img.icons8.com/fluency/48/chatbot.png"
											alt="My profile"
											className="w-9 h-9 rounded-full order-1"
										/>
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
						<div className="relative flex">
							<input
								onChange={handleInput}
								value={input}
								type="text"
								placeholder="Write your message!"
								className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
							/>
							<div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
								<button
									onClick={() => sendChatData(input)}
									type="button"
									className="inline-flex items-center justify-center rounded-e-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
								>
									<span className="font-bold">Send</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="h-6 w-6 ml-2 transform rotate-90"
									>
										<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NChatbot;
