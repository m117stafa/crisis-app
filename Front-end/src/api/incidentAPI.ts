import { AxiosResponse } from 'axios';
import { Incident } from '../utils/Incident';
import API from './axios';

export async function getAllIncidents(): Promise<Incident[]> {
    try {
        const response: AxiosResponse<Incident[]> = await API.get('incident');

        if (response.status === 200) {
            console.log(response.data);
            
            return response.data;
        } else {
            console.error(`Request failed with status code ${response.status}`);
            return []; 
        }

    } catch (error) {
        handleError(error);
    }
}

export async function postIncident(incident:Incident) {
    try{
        const response: AxiosResponse<Incident> = await API.post('incident',incident);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(`Request failed with status code ${response.status}`);
            return {}; 
        }
    } catch (error){
        handleError(error);
    }
}

function handleError(error: unknown) {
    console.error('Error during API request:', error);
    if (error.response) {
        console.error('Server responded with status code:', error.response.status);
        console.error('Response data:', error.response.data);
    } else if (error.request) {
        console.error('No response received from the server');
    } else {
        console.error('Error setting up the request:', error.message);
    }
    throw error;
}

export async function upVote(id:string) {
    try {
        const response: AxiosResponse<Incident> = await API.post(`incident/${id}/vote?isUpVote=true`,"");
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(`Request failed with status code ${response.status}`);
            return {}; 
        }
    } catch (error) {
        handleError(error);
    }
}

export async function downVote(id:string) {
    try {
        const response: AxiosResponse<Incident> = await API.post(`incident/${id}/vote?isUpVote=false`,"");
        if (response.status === 200) {
            return response.data;
        } else {
            console.error(`Request failed with status code ${response.status}`);
            return {}; 
        }
    } catch (error) {
        handleError(error);
    }
}