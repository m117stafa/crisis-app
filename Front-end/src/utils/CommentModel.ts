import { User } from "./User";

export interface CommentModel {
    id: string;
    content: string;
    user: User;
}