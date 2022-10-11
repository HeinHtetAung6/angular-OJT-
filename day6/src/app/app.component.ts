import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day6';
  presentDate = new Date(); 

  timeChange = new Subject();

  price: number = 20000; 
  
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  
  decimalNum1: number = 8.7589623; 
  decimalNum2: number = 5.43;
  
  decimalNum3: number = 0.8178;
  
  jsonData = { id: 'one', name: { username: 'user1' } };

  digits : number = 100; 

  ngOnInit() {
    setInterval(() => {
      this.timeChange.next(new Date().toString());
    }, 1000);
  }
}
