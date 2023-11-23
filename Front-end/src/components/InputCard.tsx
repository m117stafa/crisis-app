import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Avatar,
	Button,
} from "@nextui-org/react";
import { TextArea, TitleInput } from "./Input";

const InputCard = () => {
	return (
		<Card className="lg:w-2/3 w-full text-white input-card mx-5 p-2">
			<CardHeader className="flex gap-3">
				<Avatar isBordered radius="full" size="md" src={""} />
				<div className="flex flex-col">
					<p className="text-md font-bold">NextUI</p>
				</div>
			</CardHeader>
			<CardBody className="flex flex-col gap-3">
                <TitleInput id="title" type="text" name="title" placeholder="Title" />
				<TextArea
					id="incident"
					type="text"
					name="incident"
					placeholder="What's happening"
				/>
			</CardBody>
			<CardFooter>
				<Button className="bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-[#8680F7]">
					Post
				</Button>
			</CardFooter>
		</Card>
	);
};

export default InputCard;
