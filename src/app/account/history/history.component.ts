import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  transactions: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const days = 30; // Exemplo: obter histórico dos últimos 30 dias
    this.apiService.getTransactionHistory(days).subscribe(
      (response: any) => {
        this.transactions = response.transactions;
      },
      (error) => {
        alert('Failed to load transaction history');
      }
    );
  }
}