import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import { IncidentTypesEnum, UrgencyEnum } from '../utils/enums';

interface IncidentCardProps{
    title: string;
    description: string;
    type: IncidentTypesEnum;
    // location: {
    //     latitude: number;
    //     longitude: number;
    //     distance: number;
    // };
    date: Date;
    user: {
        username: string;
        avatar: string;
    };
    imageUrl?: string;
    videoUrl?: string;
    // urgency: UrgencyEnum;
    upVotes: number;
    downVotes: number;
}


const IncidentCard = (props:IncidentCardProps) => {
  return (
    <Card className="lg:w-2/3 w-full mx-5 p-2">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={props.user.avatar} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{props.user.username}</h4>
            <p className="text-small text-default-400">{props.date.toDateString()}</p>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <h1 className="font-semibold text-default-600 text-medium">{props.title}</h1>
        <p>
          {props.description}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{props.upVotes}</p>
          <p className=" text-default-400 text-small">UP</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{props.downVotes}</p>
          <p className="text-default-400 text-small">DOWN</p>
        </div>
      </CardFooter>
    </Card>)
}

export default IncidentCard