import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent {
  transferData = {
    amount: 0,
    message: '',
    account: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.transfer(this.transferData.amount, this.transferData.message, this.transferData.account).subscribe(
      (response) => {
        alert('Transfer successful!');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        alert('Transfer failed: ' + error.message);
      }
    );
  }
}