import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of, from, filter, map, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'Reactive programming concept'; 
  numbers : number[] = []; 
  val1 : number = 0; 
  filteredNumbers : number[] = []; 
  val2 : number = 0; 
  processedNumbers : number[] = []; 
  val3 : number = 0; 
  apiMessage : string =''; 
  counter : number = 0; 

  constructor() { }

  ngOnInit(): void
  {
    //const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // observer 
    //const observer = {
    //  next: (num: number) => {
    //    this.numbers.push(num);
    //    this.val1 += num;
    //  },
    //  error: (err: any) => console.log(err),
    //  complete: () => console.log("Observation completed", this.numbers, this.val1)
    //};
    //numbers$.subscribe(observer);
    //}

    //numbers$.subscribe(num => {
    //  this.numbers.push(num);
    //  this.val1 += num
    //  console.log("Observation completes, this.numbers, this.val1")
    //})
    
    //const filterFn = filter( (num : number) => num > 5 ); 
    //const filteredNumbers$ = filterFn(numbers$); 
    //filteredNumbers$.subscribe( (num : number) => { 
    //  this.filteredNumbers.push(num); this.val2 += num
    //});
     // Observable stream of data Observable<number>
      // const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
      // const numbers$ = range(1,10); 
      const numbers$ = from([1,2,3,4,5,6,7,8,9,10]); 
      // observer 
      const observer = { 
         next: (num: number) => {this.numbers.push(num); this.val1 += num }, 
         error: (err: any) => console.log(err), 
         complete: () => console.log("Observation completed") 
      }; 
      numbers$.subscribe(observer); 
      const filterFn = filter( (num : number) => num > 5 ); 
      const filteredNumbers = filterFn(numbers$); 
      filteredNumbers.subscribe( (num : number) => {this.filteredNumbers.push(num); this.val2 += num } ); 
      const mapFn = map( (num : number) => num + num ); 
      const processedNumbers$ = numbers$.pipe(filterFn, mapFn); 
      processedNumbers$.subscribe( (num : number) => {this.processedNumbers.push(num); this.val3 += num } ); 
      const api$ = ajax({ 
         url: 'https://httpbin.org/delay/1', 
         method: 'POST', 
         headers: {'Content-Type': 'application/text' }, 
         body: "Hello" 
      }); 
      api$.subscribe((res: any) => this.apiMessage = res.response.data ); 
      const clickEvent$ = fromEvent(document.getElementById('counter') as HTMLElement, 'click'); 
      clickEvent$.subscribe( () => this.counter++ ); 
   } 
  }
