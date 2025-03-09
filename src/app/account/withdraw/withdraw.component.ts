import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.withdrawFunds(this.withdrawData).subscribe(
      (response: any) => {
        alert('Withdrawal successful!');
      },
      (error) => {
        alert('Withdrawal failed: ' + error.message);
      }
    );
  }
}