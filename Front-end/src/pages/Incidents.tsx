import React from "react";
import CustomCard from "../components/Card";
import { IncidentTypesEnum } from "../utils/enums";

const Incidents = () => {
	return (
		<main className="flex flex-col items-center mt-10 gap-5 mx-5">
			<CustomCard user={{username: "Test", avatar:"hh"}} title="Hand burn!" description="I burned my hand cause im stupid, how do i fix that?" type={IncidentTypesEnum.OTHER} date={new Date()} upVotes={10} downVotes={2}/>
            <CustomCard user={{username: "Test", avatar:"hh"}} title="Hand burn!" description="I burned my hand cause im stupid, how do i fix that?" type={IncidentTypesEnum.OTHER} date={new Date()} upVotes={10} downVotes={2}/>
            <CustomCard user={{username: "Test", avatar:"hh"}} title="Hand burn!" description="I burned my hand cause im stupid, how do i fix that?" type={IncidentTypesEnum.OTHER} date={new Date()} upVotes={10} downVotes={2}/>
		</main>
	);
};

export default Incidents;
