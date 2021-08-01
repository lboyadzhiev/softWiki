async function request(url, options) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return data;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function getOptions(body) {
    const options = {
        headers: {},
    };

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
    }

    return options;
}

async function get(url) {
    return await request(url);
}
