import { response } from "express";
import heroData from "../data.json";
class SuperHero {
    constructor(id, nom, pouvoir, age, email) {
        this.id = id;
        this.nom = nom;
        this.pouvoir = pouvoir;
        this.age = age;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        heroData[id].id;
    }
    getNom() {
        return this.nom;
    }
    setNom(id) {
        heroData[id].nom;
    }
    getPouvoir() {
        return this.pouvoir;
    }
    setPouvoir(id) {
        heroData[id].pouvoir;
    }
    getAge() {
        return this.age;
    }
    setAge(id) {
        heroData[id].email;
    }
    getEmail() {
        return this.email;
    }
    setEmail(id) {
        heroData[id].email;
    }
    showHero(id) {
        return(`${this.setId(id)} ${this.setNom} ${this.setAge} ${this.setPouvoir} ${this.setEmail}\n`);
    }
    showEveryHeroes(id) {
        id.forEach(element => {
            this.showHero(element);
        });
    }
}
export default {showHero, showEveryHeroes};