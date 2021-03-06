import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './common/auth/login/login.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from './common/auth/auth.guard';
import { TavernsComponent } from './taverns/taverns.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: TavernsComponent, canActivate: [AuthGuard] },
    { path: '**', component: TavernsComponent, canActivate: [AuthGuard] },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
