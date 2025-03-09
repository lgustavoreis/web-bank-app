import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { BalanceComponent } from './account/balance/balance.component';
import { TransferComponent } from './account/transfer/transfer.component';
import { DepositComponent } from './account/deposit/deposit.component';
import { WithdrawComponent } from './account/withdraw/withdraw.component';
import { HistoryComponent } from './account/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BalanceComponent,
    TransferComponent,
    DepositComponent,
    WithdrawComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }