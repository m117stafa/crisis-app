import React, { useEffect } from "react";
import IncidentCard from "../components/IncidentCard";
import { IncidentTypesEnum } from "../utils/enums";
import InputCard from "../components/InputCard";
import useGetIncident from "../hooks/useIncident";

const Incidents = () => {
	const { incidents, loading, error, refetch } = useGetIncident();

	return (
		<main className="flex flex-col items-center mt-10 gap-5 mx-5">
			<InputCard onPost={refetch} />
			{incidents.map((incident, index) => (
				<IncidentCard
					key={index}
					id = {incident.id}
					title={incident.title}
					type={incident.type}
					description={incident.description}
					date={incident.date}
					upVotes={incident.upVotes}
					downVotes={incident.downVotes}
					onVote={refetch}
				/>
			))}
		</main>
	);
};

export default Incidents;
