var token = localStorage.getItem('token');

// POST USER SIN TOKEN
export const postApiRest = async ( url, post ) => {
    let response = await fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
            'Accept': 'application/json'
        },
        body: JSON.stringify(post)
    });
    return response;
}

export const postApiRestToken = async ( url, post ) => {
    const response = await fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify( post )
    });
    return response;
}

export const getApiRestToken = async ( url ) => {
    const response = await fetch( url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
    });
    return response;
}
