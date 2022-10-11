import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expension-panel',
  templateUrl: './expension-panel.component.html',
  styleUrls: ['./expension-panel.component.css']
})
export class ExpensionPanelComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
