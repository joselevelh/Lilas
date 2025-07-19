const fetchLookbooks = async (tags, nextCursor) => {
    const baseUrl = 'https://simpleapis-591945115175.us-central1.run.app/lookbooks/any/';
    const params = new URLSearchParams();

    // Add tags to fetch query
    tags.forEach(tag => params.append('tags', tag));

    // Add cursor to query if it's not ""
    if (nextCursor) {
        params.append('cursor', nextCursor)
    }

    const response = await fetch(`${baseUrl}?${params.toString()}`);
    console.log('response', response);
    return response.json();
};

export default fetchLookbooks;