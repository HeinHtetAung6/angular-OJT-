import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  simpleContent = 'S';
  overlap = true;
  disabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
