const baseUrl = 'https://simpleapis-591945115175.us-central1.run.app';

export const fetchLookbooksByTag = async (tags, nextCursor) => {
    const endpointUrl = baseUrl + '/lookbooks/any/';
    const params = new URLSearchParams();

    // Add tags to fetch query
    tags.forEach(tag => params.append('tags', tag));

    // Add cursor to query if it's not ""
    if (nextCursor) {
        params.append('cursor', nextCursor)
    }

    const response = await fetch(`${endpointUrl}?${params.toString()}`);
    console.log('response', response);
    return response.json();
};

export const fetchUntaggedLookbooks = async (tags, nextCursor) => {
    const endpointUrl = baseUrl + '/lookbooks/untagged/';
    const params = new URLSearchParams();

    // Add cursor to query if it's not ""
    if (nextCursor) {
        params.append('cursor', nextCursor)
    }

    const response = await fetch(`${endpointUrl}?${params.toString()}`);
    console.log('response', response);
    return response.json();
};
