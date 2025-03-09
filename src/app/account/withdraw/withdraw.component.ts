import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
})
export class WithdrawComponent {
  withdrawData = {
    amount: 0,
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.withdraw(this.withdrawData.amount).subscribe(
      (response) => {
        alert('Withdrawal successful!');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        alert('Withdrawal failed: ' + error.message);
      }
    );
  }
}