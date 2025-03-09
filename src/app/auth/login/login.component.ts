import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    this.apiService.login(credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', this.email); // Armazenar o email no localStorage
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        alert('Login failed: ' + error.message);
      }
    );
  }
}