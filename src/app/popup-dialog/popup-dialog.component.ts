import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { UsersDataService } from '../Services/users-data.service';
import { customer } from '../classes/customer';

export interface User {
  id: number;
  name: string;
  email: string;
}

const USERS_DATA: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'David', email: 'david@example.com' },
  { id: 5, name: 'Eve', email: 'eve@example.com' },
];

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.css']
})
export class PopupDialogComponent {
  displayedColumns: string[] = ['select', 'id', 'name', 'email'];
  users =  Object.values( this.usersData.getUsers());
  selection = new SelectionModel<customer>(true, []);

  constructor(
    public dialogRef: MatDialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  , private usersData:UsersDataService ) {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.users.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.users.forEach(customer => this.selection.select(customer));
  }

  onCancel() {
    this.dialogRef.close();
  }

  onDelete() {
    const ids = this.selection.selected.map(customer => customer.nationalid);
    console.log('Deleting users with IDs:', ids);
    this.dialogRef.close();
  }
}
