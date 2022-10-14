import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  //requiredForm!: FormGroup;
  public console = console;

  public model = {
    name: ""
  };

  public error = {
    name: false
  }

  constructor(private fb: FormBuilder) {
    
  }

  //myForm() {
  //   this.requiredForm = this.fb.group({
  //   email: ['', [Validators.required, 
  //      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
  //   });
  //}

  ngOnInit()
  {

  }

  public textChange() {
    this.error.name = this.model.name ? false : true;
  }
}
