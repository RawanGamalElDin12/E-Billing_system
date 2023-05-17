import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { UsersDataService } from '../Services/users-data.service';
import { customer } from '../classes/customer';
import { HttpServiceService } from '../Services/http-service.service';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css'],
})
export class PopupDialogComponent {
  displayedColumns: string[] = [
    'select',
    'National ID',
    'First Name',
    'Last Name',
    'Email',
    'Address',
    'DOB',
  ];
  users = Object.values(this.usersData.getUsers());
  selection = new SelectionModel<customer>(true, []);

  constructor(
    public dialogRef: MatDialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usersData: UsersDataService,
    private http: HttpServiceService
  ) {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.users.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.users.forEach((customer) => this.selection.select(customer));
  }

  onCancel() {
    this.dialogRef.close();
  }

  onDelete() {
    const ids = this.selection.selected.map((customer) => customer.nationalid);

    ids.forEach((id) => {
      this.http.deleteUserById(id).subscribe(
        () => {
          console.log(`User with ID ${id} deleted successfully`);
          this.usersData.deleteUserByNationalId(id);
        },
        (error) => {
          console.error(`Error deleting user with ID ${id}:`, error);
        }
      );
    });

    console.log('Deleting users with IDs:', ids);
    this.dialogRef.close();
  }
}
