import React from "react";
import IncidentCard from "../components/IncidentCard";
import { IncidentTypesEnum } from "../utils/enums";
import InputCard from "../components/InputCard";

const Incidents = () => {
	return (
		<main className="flex flex-col items-center mt-10 gap-5 mx-5">
			<InputCard />
			<IncidentCard user={{username: "Test", avatar:"hh"}} title="Hand burn!" description="I burned my hand cause im stupid, how do i fix that?" type={IncidentTypesEnum.OTHER} date={new Date()} upVotes={10} downVotes={2}/>
            <IncidentCard user={{username: "Test", avatar:"hh"}} title="Hand burn!" description="I burned my hand cause im stupid, how do i fix that?" type={IncidentTypesEnum.OTHER} date={new Date()} upVotes={10} downVotes={2}/>
            <IncidentCard user={{username: "Test", avatar:"hh"}} title="Hand burn!" description="I burned my hand cause im stupid, how do i fix that?" type={IncidentTypesEnum.OTHER} date={new Date()} upVotes={10} downVotes={2}/>
		</main>
	);
};

export default Incidents;
