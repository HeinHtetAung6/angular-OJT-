import { Injectable } from '@angular/core';
import { Hero } from './interfaces/hero';
import { HEROES } from './constants/mock-hero';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public subject$ = new Subject();

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
