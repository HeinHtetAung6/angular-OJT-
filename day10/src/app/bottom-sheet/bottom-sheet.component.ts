import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {
  //@ViewChild(TemplateRef) template : TemplateRef<any>;

  constructor(readonly bottomSheet: MatBottomSheet) { }
  
  open(config?: MatBottomSheetConfig) {
    return this.bottomSheet.open(this.template, config);
  }
  ngOnInit(): void {
  }

}
