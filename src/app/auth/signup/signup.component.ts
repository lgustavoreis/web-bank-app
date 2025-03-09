import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
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
      (response: any) => {
        alert('Account created successfully!');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Failed to create account: ' + error.message);
      }
    );
  }
}