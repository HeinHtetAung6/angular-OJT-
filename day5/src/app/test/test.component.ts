import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isLogIn : boolean = false;
  isLogOut: boolean = true;
  
  list = [1, 2, 3, 4, 5];
  
  studentArr: any[] = [ { 
    "id": 1, 
    "name": "student1" 
  }, 
  { 
    "id": 2,
    "name": "student2" 
  }, 
  { 
    "id": 3, "name": "student3"
  },
  { 
    "id": 4, 
    "name": "student4" 
  } 
  ]; 
  trackByData(index:number, studentArr:any): number { 
  return studentArr.id; 
  }
  
  logInName = 'admin'; 

  users: User[] = [ 
    { 
       "userName": 'User1' 
    }, 
    { 
       "userName": 'User2' 
    }, 
  ]; 

  name: string = "Peter";

  constructor() { }

  ngOnInit(): void {
  }

}
