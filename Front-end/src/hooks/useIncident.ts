import { useCallback, useEffect, useState } from "react";
import { Incident } from "../utils/Incident";
import { getAllIncidents } from "../api/incidentAPI";

function useGetIncident(){
    const [incidents, setIncidents] = useState<Incident[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			const incidents: Incident[] = await getAllIncidents();
			//set timeout to simulate loading
			setIncidents(incidents)
			setLoading(false);
			// Handle the data or update state as needed
		} catch (error) {
			console.error(error);
            setError(true);
			// Handle errors as needed
		}
	}, []);

    const refetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    useEffect(()=>{
        fetchData();
    },[fetchData]);

    return {incidents, loading, error, refetch}
}

export default useGetIncident;