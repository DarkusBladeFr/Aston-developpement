import http from 'http';
const server = http.createServer((request, response) => {
    server.listen(8080, () => console.log("Le serveur écoute sur le port 8080"));
    getReq(request);
    getRes(response);
});
export function getReq(request) {
    return request;
}
export function getRes(response) {
    return response;
}