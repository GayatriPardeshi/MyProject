import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastConfig, Toaster, ToastType } from 'ngx-toast-notifications';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  // public _login : boolean;
  private types: Array<ToastType> = ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark', 'light'];
  private textSucess = 'Login SucessFully!!!';
  private textFail = 'Wrong username password. Please try again.';

  constructor(private fb: FormBuilder, private toaster: Toaster,
              public dialogRef: MatDialogRef<LoginComponent>,
              private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    if (this.form.value.username === 'gayatri' && this.form.value.password === 'password') {
      this.toaster.open({
        text: this.textSucess,
        // caption: type + ' notification',
        type: 'success',
      });
      this.router.navigateByUrl('/users');
    } else {
      const type = this.types[1];
      this.toaster.open({
        text: this.textFail,
        // caption: type + ' notification',
        type: 'danger',
      });
    }

    this.dialogRef.close();
  }

}
