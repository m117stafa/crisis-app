import { Location } from "./Location";
import { IncidentTypesEnum, UrgencyEnum } from "./enums";

export interface Incident{
    id: string;
    title: string;
    description: string;
    date: string;
    type: IncidentTypesEnum;
    location: Location ;
    userId: number;
    imageUrl: string;
    videoUrl: string;
    urgency: UrgencyEnum;
    upVotes: number;
    downVotes: number;
}