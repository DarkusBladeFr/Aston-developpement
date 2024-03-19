import http from 'http';
import dotenv from 'dotenv';
import url from 'url';
dotenv.config();
// Fonction pour afficher les messages
const serveMessage = (response, message) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end(message);
}
// Création du serveur
const server = http.createServer((request, response) => {
    server.listen(8080, () => console.log("Le serveur écoute sur le port 8080"));
    getRes(response);
    getReq(request);
});
export function getReq(request) {
    return request;
}
export function getRes(response) {
    return response;
}