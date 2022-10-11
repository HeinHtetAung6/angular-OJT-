import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DividerComponent } from './divider/divider.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'; 
import { ExpensionPanelComponent } from './expension-panel/expension-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormFieldComponent } from './form-field/form-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GridListComponent } from './grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { IconComponent } from './icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    DividerComponent,
    ExpensionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
