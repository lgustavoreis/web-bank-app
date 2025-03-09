import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  accountInfo: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    const email = localStorage.getItem('email'); // Supondo que o email está armazenado no localStorage
    if (email) {
      this.apiService.getAccountInfo(email).subscribe(
        (response: any) => {
          this.accountInfo = response;
        },
        (error) => {
          alert('Failed to load account info');
        }
      );
    } else {
      alert('Email not found. Please log in again.');
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email'); // Limpar o email ao fazer logout
    this.router.navigate(['/login']);
  }
}