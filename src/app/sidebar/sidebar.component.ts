import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private auth: AuthService){}

  router = inject(Router);
  logout(){
    console.log("write");
    this.auth.logout().subscribe({
      next: () => {

        this.router.navigateByUrl('login');
      },
      error: (err) => {

      }
    });
  }
}
