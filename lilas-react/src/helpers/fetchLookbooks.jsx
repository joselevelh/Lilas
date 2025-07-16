const fetchLookbooks = async (tags) => {
    const baseUrl = 'https://simpleapis-591945115175.us-central1.run.app/lookbooks/any/';
    const params = new URLSearchParams();

    tags.forEach(tag => params.append('tags', tag));

    const response = await fetch(`${baseUrl}?${params.toString()}`);
    console.log('response', response);
    return response.json();
};

export default fetchLookbooks;