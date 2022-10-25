import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.css']
})
export class TablePaginatorComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  employeeInfo: Employee[] = [
    {position: 1, name: 'Ag Ag',phNumber: "0912345678", dateOfBirth: "26/6/1997", year: '4th', address: 'Yangon'},
    {position: 2, name: 'Hein',phNumber: "0912345678", dateOfBirth: "24/7/1997", year: '4th', address: 'Nay Pyi Taw'},
    {position: 3, name: 'Htet',phNumber: "0912345678", dateOfBirth: "2/8/1997", year: '4th', address: 'Mandalay'},
    {position: 4, name: 'Aung',phNumber: "0912345678", dateOfBirth: "22/9/1997", year: '4th', address: 'Magway'},
    {position: 5, name: 'Kyaw Gyi',phNumber: "0912345678", dateOfBirth: "21/10/1997", year: '4th', address: 'Taung Gyi'},
    {position: 6, name: 'Su Su',phNumber: "0912345678", dateOfBirth: "20/12/1997", year: '4th', address: 'Ka Law'},
    {position: 7, name: 'Hla Hla',phNumber: "0912345678", dateOfBirth: "10/1/1997", year: '4th', address: 'May Myoh'},
    {position: 8, name: 'Aye Aye',phNumber: "0912345678", dateOfBirth: "18/2/1997", year: '4th', address: 'Yangon'},
    {position: 9, name: 'Mya Mya',phNumber: "0912345678", dateOfBirth: "30/4/1997", year: '4th', address: 'Bago'},
    {position: 10, name: 'Kyaw Kyaw',phNumber: "0912345678", dateOfBirth: "15/8/1997", year: '4th', address: 'Kyite Hto'},
    {position: 11, name: 'Sein Sein',phNumber: "0912345678", dateOfBirth: "7/11/1997", year: '4th', address: 'Yangon'},
    {position: 12, name: 'Ko Ko',phNumber: "0912345678", dateOfBirth: "9/5/1997", year: '4th', address: 'Mandalay'},
    {position: 13, name: 'Than Than',phNumber: "0912345678", dateOfBirth: "8/6/1997", year: '4th', address: 'Nay Pyi Taw'},
    {position: 14, name: 'Pan Pan',phNumber: "0912345678", dateOfBirth: "7/8/1997", year: '4th', address: 'Myit Kyee Nar'},
    {position: 15, name: 'Aye',phNumber: "0912345678", dateOfBirth: "28/9/1997", year: '4th', address: 'Hpa An'},
    {position: 16, name: 'Thet Thet', phNumber: "0912345678", dateOfBirth: "26/10/1997", year: '4th', address: 'Yangon'},
    {position: 17, name: 'Win Win',phNumber: "0912345678", dateOfBirth: "6/12/1997", year: '4th', address: 'Bagan'},
    {position: 18, name: 'Nan Nan', phNumber: "0912345678", dateOfBirth: "1/5/1997", year: '4th', address: 'Bago'},
    {position: 19, name: 'Bo Bo', phNumber: "0912345678", dateOfBirth: "24/1/1997", year: '4th', address: 'Yangon'},
    {position: 20, name: 'Soe Soe',phNumber: "0912345678", dateOfBirth: "9/4/1997", year: '4th', address: 'Pann Ta Naw'},
  ]
  displayedColumns = ['position', 'name', 'phNumber', 'dateOfBirth', 'year', 'address'];
  dataSource!: MatTableDataSource<Employee>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.employeeInfo);
      this.dataSource.paginator = this.paginator;
    })
  }

}
