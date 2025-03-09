import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe os componentes com caminhos corrigidos (ajuste conforme sua estrutura real)
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { BalanceComponent } from './account/balance/balance.component';
import { TransferComponent } from './account/transfer/transfer.component';
import { DepositComponent } from './account/deposit/deposit.component';
import { WithdrawComponent } from './account/withdraw/withdraw.component';
import { HistoryComponent } from './account/history/history.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }