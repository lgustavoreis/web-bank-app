import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  depositData = {
    amount: 0,
    message: '',
    email: '',
  };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.depositFunds(this.depositData).subscribe(
      (response: any) => {
        alert('Deposit successful!');
      },
      (error) => {
        alert('Deposit failed: ' + error.message);
      }
    );
  }
}