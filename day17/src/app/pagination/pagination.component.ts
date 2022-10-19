import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  
  @ViewChild('paginator') paginator: MatPaginator;
  employeeInfo: Employee[] = [
    { id: 1, name: 'Ag Ag', department: 'IT', gender: 'male', phNumber: '0912345678' },
    { id: 2, name: 'Su Su', department: 'Web', gender: 'female', phNumber: '0912345678' },
    { id: 3, name: 'Moe Moe', department: 'IT', gender: 'male', phNumber: '0912345678' },
    { id: 4, name: 'Kyaw Kyaw', department: 'Software', gender: 'male', phNumber: '0912345678' },
    { id: 5, name: 'Hla Hla', department: 'IT', gender: 'female', phNumber: '0912345678' },
    { id: 6, name: 'Aye Aye', department: 'IT', gender: 'female', phNumber: '0912345678' },
    { id: 7, name: 'Kg Kg', department: 'Network', gender: 'male', phNumber: '0912345678' },
    { id: 8, name: 'Zin Zin', department: 'IT', gender: 'female', phNumber: '0912345678' },
    { id: 9, name: 'Ko Ko', department: 'Software', gender: 'male', phNumber: '0912345678' },
    { id: 10, name: 'Mg Mg', department: 'Network', gender: 'male', phNumber: '0912345678' },
    { id: 11, name: 'Nyi Nyi', department: 'Web', gender: 'male', phNumber: '0912345678' },
    { id: 12, name: 'Pan Pan', department: 'Software', gender: 'female', phNumber: '0912345678' },
    { id: 13, name: 'Wai Wai', department: 'Web', gender: 'female', phNumber: '0912345678' },
    { id: 14, name: 'Lin Lin', department: 'Network', gender: 'male', phNumber: '0912345678' }
  ];
  displayedColumns = ['id', 'name', 'department', 'gender', 'phNumber'];
  dataSource: MatTableDataSource<Employee>;

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
