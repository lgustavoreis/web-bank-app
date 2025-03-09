import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    mobilePhone: '',
    password: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.createAccount(this.user).subscribe(
      (response) => {
        alert('Account created successfully!');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Account creation failed: ' + error.message);
      }
    );
  }
}