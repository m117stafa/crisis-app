import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Avatar,
	Button,
} from "@nextui-org/react";
import { TextArea, TitleInput } from "./Input";
import { Incident } from "../utils/Incident";
import { postIncident } from "../api/incidentAPI";
import { Link } from "react-router-dom";

const InputCard = (props: any) => {
	const [input, setInput] = useState<Incident>({
		title: "",
		description: "",
	});

	const handleInput = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		field: string
	) => {
		const { value } = e.target;
		setInput((prevInput) => ({ ...prevInput, [field]: value }));
	};

	const handlePost = async () => {
		try {
			const response = await postIncident(input);
			props.onPost();
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	};

	const chatBotUrl = '/chatbot';
	return (
		<Card className="lg:w-2/3 w-full text-white input-card mx-5 p-2">
			<CardHeader className="flex gap-3">
				<Avatar isBordered radius="full" size="md" src={""} />
				<div className="flex flex-col">
					<p className="text-md font-bold">NextUI</p>
				</div>
			</CardHeader>
			<CardBody className="flex flex-col gap-3">
				<TitleInput
					id="title"
					type="text"
					name="title"
					placeholder="Title"
					onChange={(e) => handleInput(e, "title")}
					value={input.title}
				/>
				<TextArea
					id="incident"
					type="text"
					name="incident"
					onChange={(e) => handleInput(e, "description")}
					value={input.description}
					placeholder="What's happening"
				/>
			</CardBody>
			<CardFooter>
				<div className="flex justify-between w-full">
					<Button
						onClick={() => handlePost()}
						className="bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-[#8680F7]"
					>
						Post
					</Button>
					<Link to={chatBotUrl+"?query="+input.title+" "+input.description}>
					<Button className="bg-white font-bold">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
							/>
						</svg>
						Ask Chatbot
					</Button>
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
};

export default InputCard;
