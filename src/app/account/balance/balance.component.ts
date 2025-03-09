import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balance: number = 0;
  lastUpdated: Date = new Date();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const email = localStorage.getItem('email');
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