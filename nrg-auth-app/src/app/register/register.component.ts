import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname = '';
  lastname = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        alert(err.error);
      }
    });
  }
}
