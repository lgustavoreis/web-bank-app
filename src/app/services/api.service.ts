import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://starfish-app-g96va.ondigitalocean.app/v1';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${BASE_URL}/accounts/auth`, { email, password });
  }

  createAccount(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}/accounts/create`, user);
  }

  activateAccount(email: string, activationCode: string): Observable<any> {
    return this.http.post(`${BASE_URL}/accounts/activate`, { email, activationCode });
  }

  getAccountInfo(): Observable<any> {
    return this.http.get(`${BASE_URL}/accounts/info`, { headers: this.getHeaders() });
  }

  getBalance(): Observable<any> {
    return this.http.get(`${BASE_URL}/accounts/balance`, { headers: this.getHeaders() });
  }

  transfer(amount: number, message: string, account: string): Observable<any> {
    return this.http.post(`${BASE_URL}/transactions/transfer`, { amount, message, account }, { headers: this.getHeaders() });
  }

  deposit(amount: number, message: string, email: string): Observable<any> {
    return this.http.post(`${BASE_URL}/transactions/deposit`, { amount, message, email }, { headers: this.getHeaders() });
  }

  withdraw(amount: number): Observable<any> {
    return this.http.post(`${BASE_URL}/transactions/withdraw`, { amount }, { headers: this.getHeaders() });
  }

  getTransactionHistory(days: number): Observable<any> {
    return this.http.get(`${BASE_URL}/transactions/${days}/statement`, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ 'x-access-token': token || '' });
  }
}