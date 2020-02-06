import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { UserService } from '../new-user/user.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,
    private us: UserService) {
    this.createForm();
  }

  ngOnInit() {
  }


  login(): void {
    let values = this.form.value;

    if (values.username == 'admin' && values.password == 'admin') {
      this.router.navigate(["dashboard"]);
      this.us.currentUser = values;
    } else if (values.username == 'test' && values.password == 'test') {
      this.router.navigate(["dashboard"]);
      this.us.currentUser = values;
    } else {
      alert("Please enter a valid email and password");
    }
  }

  createForm() {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
}
