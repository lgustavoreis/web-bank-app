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
    this.apiService.getAccountInfo().subscribe(
      (response) => {
        this.accountInfo = response;
      },
      (error) => {
        alert('Failed to load account info');
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}