// app.routes.ts
import { Route } from '@angular/router';

// Importe seus componentes
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

// Defina as rotas
export const routes: Route[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  // Adicione outras rotas aqui
];