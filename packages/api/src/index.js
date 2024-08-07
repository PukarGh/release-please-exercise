/**
 * Send a Super fast request to the API endpoint
 * @param endpoint
 * @param method
 * @param data
 * @returns {Promise<Response>}
 */
const request = async (endpoint, method, data = {}) => {
    console.log('Fetching Data Super Fast ...');
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

