import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: any;
  constructor() { }
  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "lastName": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
    })
  }
  
  submitData() {
    console.log(this.registerForm.value);
    
    if (this.registerForm.valid) {
      alert(`Thank You ${this.registerForm.value.firstName}`);
      this.registerForm.reset();
    }
  }

  get firstname() {
    return this.registerForm.get('firstName'); 
  }
  get lastname() { return this.registerForm.get('lastName'); }

  get email() { return this.registerForm.get('email'); }

  get mobilenumber() { return this.registerForm.get('mobileNumber'); }
}
