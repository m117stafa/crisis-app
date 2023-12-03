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

const InputCard = (props:any) => {
	const [input, setInput] = useState<Incident>({title:"",description:""});

	const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        const { value } = e.target;
        setInput((prevInput) => ({ ...prevInput, [field]: value }));
    };

    const handlePost = async () => {
        try{
			const response = await postIncident(input);
			props.onPost();
			console.log(response);
		} catch(e){
			console.log(e);	
		}
    };
	return (
		<Card className="lg:w-2/3 w-full text-white input-card mx-5 p-2">
			<CardHeader className="flex gap-3">
				<Avatar isBordered radius="full" size="md" src={""} />
				<div className="flex flex-col">
					<p className="text-md font-bold">NextUI</p>
				</div>
			</CardHeader>
			<CardBody className="flex flex-col gap-3">
                <TitleInput id="title" type="text" name="title" placeholder="Title" onChange={(e) => handleInput(e, 'title')} value={input.title} />
				<TextArea
					id="incident"
					type="text"
					name="incident"
					onChange={(e) => handleInput(e, 'description')}
					value={input.description}
					placeholder="What's happening"
				/>
			</CardBody>
			<CardFooter>
				<Button onClick={()=> handlePost()} className="bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-[#8680F7]">
					Post
				</Button>
			</CardFooter>
		</Card>
	);
};

export default InputCard;
