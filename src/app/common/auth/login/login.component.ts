import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { style } from '@angular/animations';
import { TavernsService, ITavern } from '../../../taverns.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    UserName = '';
    Password = '';
    TavernName = '';
    showSignUp = false;
    isAdmin = false;
    isManager = false;
    role;
    taverns: ITavern[];

    constructor(private router: Router, private authService: AuthService, private tavernsService: TavernsService) {}

    toggleSignup(): void {
        this.showSignUp = !this.showSignUp;
        this.UserName = '';
        this.Password = '';
        this.TavernName = '';

        if(this.isManager === true){
            this.isManager = false
        }

        if(this.isAdmin === true){
            this.isAdmin = false
        }
        
        
    }

    toggleAdmin(): void {
        this.isAdmin = !this.isAdmin;
    }

    toggleManager(): void {
        this.isManager = !this.isManager;
       
    }

    login(): void {
        this.authService.login(this.UserName, this.Password).subscribe(
            (response) => {
                if (response.success) {
                    console.log('successful login');
                    this.router.navigateByUrl('/home');
                }
            },
            (error) => {
                console.log('username/password incorrect');
            },
        );
    }

    signup(): void {
        const payload = {
            UserName: this.UserName,
            Password: this.Password,
            Tavern: this.TavernName,
            roleID: this.role,
        }
        console.log(payload);
        this.authService.signup(payload).subscribe(
            (user) => {
                if (user) {
                    this.toggleSignup()
                    console.log('Successfuly Signed Up!');
                }
            },
        (error) => {
            console.log(error);
        },
        );
    }
}
