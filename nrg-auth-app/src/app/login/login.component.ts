import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const credentials = { email: this.email, password: this.password };

    this.auth.login(credentials).subscribe({
      next: (res: any) => {
        this.auth.setUser(res.user);
        alert(res.message);
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        alert(err.error);
      }
    });
  }
}
