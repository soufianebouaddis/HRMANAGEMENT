import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { LoginComponent } from "./component/login/login.component";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, NavbarComponent, LoginComponent,RouterOutlet],
})
export class AppComponent{
  title = 'hrmanagementfrontend';
  displayNavBar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSidebarVisibility();
      }
    });
  }

  shouldDisplaySidebar(): boolean {
    return !this.router.url.startsWith("/login");
  }

  private updateSidebarVisibility(): void {
    this.displayNavBar = this.shouldDisplaySidebar();
  }
}
