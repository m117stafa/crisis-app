import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Avatar,
} from "@nextui-org/react";
import { IncidentTypesEnum } from "../utils/enums";
import { downVote, upVote } from "../api/incidentAPI";

interface IncidentCardProps {
	id: string;
	title: string;
	description: string;
	type: IncidentTypesEnum;
	// location: {
	//     latitude: number;
	//     longitude: number;
	//     distance: number;
	// };
	date?: string;
	user?: {
		username: string;
		avatar: string;
	};
	imageUrl?: string;
	videoUrl?: string;
	// urgency: UrgencyEnum;
	upVotes: number;
	downVotes: number;
	onVote:()=> void;
}

const IncidentCard = (props: IncidentCardProps) => {
	const handleUpVote = async()=>{
		try {
			const response = await upVote(props.id);
			props.onVote();
			console.log(response);
		} catch(e){
			console.error(e);
		}
	}
	const handleDownVote = async()=>{
		try {
			const response = await downVote(props.id);
			props.onVote();
			console.log(response);
		} catch(e){
			console.error(e);
		}
	}
	
	return (
		<Card className="lg:w-2/3 w-full mx-5 p-2">
			<CardHeader className="justify-between">
				<div className="flex gap-5">
					<Avatar
						isBordered
						radius="full"
						size="md"
						src={props.user?.avatar}
					/>
					<div className="flex flex-col gap-1 items-start justify-center">
						<h4 className="text-small font-semibold leading-none text-default-600">
							{props.user?.username}
						</h4>
						<p className="text-small text-default-400">
							{props.date}
						</p>
					</div>
				</div>
			</CardHeader>
			<CardBody className="px-3 py-0 text-small text-default-400">
				<h1 className="font-semibold text-default-600 text-medium">
					{props.title}
				</h1>
				<p>{props.description}</p>
			</CardBody>
			<CardFooter className="gap-3">
				<div className="flex gap-1 items-center">
					<p className="font-semibold text-default-400 text-small">
						{props.upVotes}
					</p>
					<p onClick={()=> handleUpVote()} className=" text-default-400 text-small rounded-full p-1 hover:bg-slate-100 hover:cursor-pointer transition">
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
								d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
							/>
						</svg>
					</p>
				</div>
				<div className="flex items-center gap-1">
					<p className="font-semibold text-default-400 text-small">
						{props.downVotes}
					</p>
					<p onClick={() => handleDownVote()} className="text-default-400 text-small rounded-full p-1 hover:bg-slate-100 hover:cursor-pointer transition">
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
								d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
							/>
						</svg>
					</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default IncidentCard;
