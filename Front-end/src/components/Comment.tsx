import React from "react";
import { CommentModel } from "../utils/COmmentModel";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface CommentProps {
	comment: CommentModel;
}

const Comment = ({ comment }: CommentProps) => {
	return (
		<div className="p-2 text-small text-default-400">
			<h4 className="font-semibold text-default-600 text-sm">{comment.user.username}</h4>
			<p>{comment.content}</p>
		</div>
	);
};

export default Comment;
