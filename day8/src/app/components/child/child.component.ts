import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public heroes: Hero[] = [];
  public btnCount: number = 0;
  @Output() count: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  changeCount() {
    this.btnCount += 1;
    this.count.emit(this.btnCount);
  }
  
}
