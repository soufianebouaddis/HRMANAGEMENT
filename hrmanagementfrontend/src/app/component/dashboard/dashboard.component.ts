import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TacheComponent } from '../tache/tache.component';
import { StagiaireService } from '../../service/stagiaire.service';
import { EncadrantService } from '../../service/encadrant.service';
import { TacheService } from '../../service/tache.service';
import { TacheAssignee } from '../../type/TacheAssignee';
import { Encadrant } from '../../type/Encadrant';
import { Stagiaire } from '../../type/Stagiaire';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stagaire_size !: number ;
  encadrant_size !: number;
  tache_size !: number;
  constructor(private stagiaireService: StagiaireService, private encadrantService: EncadrantService, private tacheService: TacheService) {
    this.fetchAllTasks()
    this.fetchEncadrants()
    this.fetchStagiaire()
   }

  fetchStagiaire() {
    this.stagiaireService.fetchAll().subscribe({
      next: (response : Stagiaire[]) => {
        console.log(response)
        this.stagaire_size = response.length;
      },
      error : (err)=> {
        console.log(err);
      }
    })
  }
  fetchEncadrants() {
    this.encadrantService.fetchAll().subscribe({
      next : (response : Encadrant[]) => {
        this.encadrant_size = response.length
      },
      error : (err) => {
        console.log(err);
      }
    })
  }
  fetchAllTasks() {
    this.tacheService.fetchAll().subscribe({
      next: (response: TacheAssignee[]) => {
        this.tache_size = response.length
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
