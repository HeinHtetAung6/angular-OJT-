import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  studentForm !: FormGroup;
  actionBtn: string = "Save"; 


  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<DialogComponent>,) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      phNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      year: ['', Validators.required],
      address: ['', Validators.required],
    });
    if (this.editData) {
      this.actionBtn = "Update";
      this.studentForm.controls['name'].setValue(this.editData.name);
      this.studentForm.controls['phNumber'].setValue(this.editData.phNumber);
      this.studentForm.controls['dateOfBirth'].setValue(this.editData.dateOfBirth);
      this.studentForm.controls['year'].setValue(this.editData.year);
      this.studentForm.controls['address'].setValue(this.editData.address);
    }
  }
  addStudent() {
    if (!this.editData) {
      if (this.studentForm.valid) {
        this.api.postStudent(this.studentForm.value)
          .subscribe({
            next: (res) => {
              alert("Student added successfully");
              this.studentForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error while adding student")
            }
        })
      } else {
        this.updateStudent( ) 
      }
    }
  }
  updateStudent() {
    this.api.putStudent(this.studentForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Student upated successfully");
          this.studentForm.reset();
          this.dialogRef.close('update');
        },
        error: () => {
          alert("Error while updating student!");
        }
    })
  }
}
