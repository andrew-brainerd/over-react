import { hostname } from '../config/server';

export const getStats = async userId => {
    const response = await fetch(`${hostname}/api/stats/${userId}`);
    const json = await response.json();

    if (response.status !== 200) {
        throw Error(`Failed to fetch user stats | ${json.message}`);
    }

    return json;
}
