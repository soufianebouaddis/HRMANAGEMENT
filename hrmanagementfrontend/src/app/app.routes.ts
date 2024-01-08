import { Routes } from '@angular/router';
import { StagiaireComponent } from './component/stagiaire/stagiaire.component';
import { EncadrantComponent } from './component/encadrant/encadrant.component';
import { TacheComponent } from './component/tache/tache.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
    { path: 'tasks', component: TacheComponent },
    { path: 'stagiaire', component: StagiaireComponent },
    { path: 'encadrant', component: EncadrantComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component:LoginComponent},
    { path: '',redirectTo:'/login', pathMatch: 'full' },
];


