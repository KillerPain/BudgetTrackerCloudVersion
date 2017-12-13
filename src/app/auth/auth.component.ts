import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bt-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  registerFrom: FormGroup;
  active = false;

  constructor(private service: AuthService, private fb: FormBuilder, private router: Router) {
    this.createLoginForm();
   }

  createLoginForm() {
    this.loginForm = this.fb.group({ // <-- the parent FormGroup
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
    this.registerFrom = this.fb.group({ // <-- the parent FormGroup
      username: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }
  ngOnInit() {
  }

  onLoginSubmit() {
    this.service.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    this.router.navigate(['main']);
  }

  onRegisternSubmit() {
    this.service.register(this.registerFrom.get('username').value, this.registerFrom.get('password').value, this.registerFrom.get('email').value);
  }

  register() {
    this.active = (this.active ? false : true);
  }
}
