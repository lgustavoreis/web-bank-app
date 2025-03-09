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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBalance().subscribe(
      (response: any) => {
        this.balance = response.balance;
      },
      (error) => {
        alert('Failed to load balance');
      }
    );
  }
}