import { Stagiaire } from "./Stagiaire";

export interface Encadrant{
    id?:number;
    nom:string;
    prenom:string;
    departement:string;
    stagiaires:Stagiaire[];
}