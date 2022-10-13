import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { MatSortModule } from '@angular/material/sort';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TooltipComponent } from './tooltip/tooltip.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTreeModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
