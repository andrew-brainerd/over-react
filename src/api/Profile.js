import { hostname } from '../config/server';

export const getProfile = async userId => {
    const response = await fetch(`${hostname}/api/profile/${userId}`);
    const json = await response.json();

    if (response.status !== 200) {
        throw Error(`Failed to fetch user profile | ${json.message}`);
    }

    return json;
}
