import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  balance: number = 0;
  lastUpdated: Date = new Date();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const email = localStorage.getItem('email'); // Supondo que o email está armazenado no localStorage
    if (email) {
      this.apiService.getAccountInfo(email).subscribe(
        (response: any) => {
          this.balance = response.balance;
          this.lastUpdated = new Date();
        },
        (error) => {
          alert('Failed to load balance');
        }
      );
    }
  }
}