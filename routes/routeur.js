import app from "App.js";
import url from "url";
import start from "../start.js";
import myClass from "../models/SuperHeroClass.js";
const request = start.request;
const parsedUrl = url.parse(request.url, true);
const pathName = parsedUrl.pathname;
if(request.method === 'GET') {
    if(pathName === 'superHeroes/:id') {
        app.get('superHeroes/:id', (request, response) => {
            response.send(`Hero : ${myClass.showHero(request.params.id)}`);
        })
    } else if(pathName === 'superHeroes/') {
        app.get('superHeroes/', (request, response) => {
            response.send(`${myClass.showEveryHeroes(request.params)}`);
        })
    }
    else {
        console.warn("id incorrect");
    }
} else if(request.method === 'POST') {
    if(pathName === 'superHeroes/') {
        //Créer un Super Héros
    } else {
        console.warn("Requête POST mal utilisé");
    }
} else if(request.method === 'PUT') {
    if(pathName === 'superHeroes/:id') {
        //Modifie un Super Héros en fonction de son id
    } else {
        console.warn("id incorrect");
    }
} else if(request.method === 'DELETE') {
    if(pathName === 'superHeroes/:id') {
        //Supprime un Super Héros en fonction de son id
    } else {
        console.warn("id incorrect");
    }
} else {
    console.warn("Méthode non utilisée, incorrecte ou non autorisée");
}