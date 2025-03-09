import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  transferData = {
    amount: 0,
    message: '',
    account: '',
  };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.transferFunds(this.transferData).subscribe(
      (response: any) => {
        alert('Transfer successful!');
      },
      (error) => {
        alert('Transfer failed: ' + error.message);
      }
    );
  }
}