import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  public count: number = 0;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes() {
  const heroes = this.heroService.getHeroes();
  setTimeout(() => {
    this.heroService.subject$.next(heroes);
  }, 100);
  }

  btnCount() {
    console.log('parent');
    this.count += 1;
  }
}
