import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  showPassword: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {
  title = 'day14';
  user: IUser;
  
  constructor() {
    this.user = {} as IUser;
  }

  public validate(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.info('Name:', this.user.name);
    console.info('Nickname:', this.user.nickname);
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);
  }
}
