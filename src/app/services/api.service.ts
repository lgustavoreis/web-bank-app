import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://starfish-app-g96va.ondigitalocean.app/v1';

  constructor(private http: HttpClient) {}

  createAccount(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts/create`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts/auth`, credentials);
  }

  getAccountInfo(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/accounts/info/${email}`);
  }

  transferFunds(transferData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/transactions/transfer`, transferData);
  }

  depositFunds(depositData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/transactions/deposit`, depositData);
  }

  withdrawFunds(withdrawData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/transactions/withdraw`, withdrawData);
  }

  getTransactionHistory(days: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/transactions/${days}/statement`);
  }
}