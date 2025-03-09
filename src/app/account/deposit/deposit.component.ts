import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent {
  depositData = {
    amount: 0,
    message: '',
    email: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.deposit(this.depositData.amount, this.depositData.message, this.depositData.email).subscribe(
      (response) => {
        alert('Deposit successful!');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        alert('Deposit failed: ' + error.message);
      }
    );
  }
}