const request = async (endpoint, method, data = {}) => {
    return fetch(`https://api.example.com/${endpoint}`, {
        method,
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export const get = (endpoint) => request(endpoint, 'GET');
export const post = (endpoint, data) => request(endpoint, 'POST', data);

module.exports = {
    get,
    post,
};

