import { TacheAssignee } from './TacheAssignee';
export interface Stagiaire{
    id?:number;
    nom:string;
    prenom:string;
    age:number;
    adresse:string;
    departement:string;
    dateDebut:Date;
    dateFin:Date;
    tachesAssignees:TacheAssignee[];
}