import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customer } from '../classes/customer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../Services/http-service.service';
import { UsersDataService } from '../Services/users-data.service';
@Component({
  selector: 'app-view-and-update-user',
  templateUrl: './view-and-update-user.component.html',
  styleUrls: ['./view-and-update-user.component.css']
})
export class ViewAndUpdateUserComponent {
  public userForm: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private http: HttpServiceService,private usersData: UsersDataService) {}
   user: any;
   users: customer[]= [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.users = Object.values( this.usersData.getUsers()); 

      const userId = params.get('id');
       this.user = history.state.user;

      console.log(userId);
      console.log(this.user.email);
      console.log(this.user.firstname);
      this.userForm = this.fb.group({
        nationalid: [this.user.nationalid],
        firstname: [this.user.firstname],
        lastname: [this.user.lastname],
        email: [this.user.email],
        DOB: [this.user.DOB],
        address: [this.user.address],
      });
    });
  
    
  
  }

  onSubmit()
  {
    this.user.firstname = this.userForm.get('firstname').value;
    this.user.lastname= this.userForm.get('lastname').value;
    this.user.DOB= this.userForm.get('DOB').value;
    this.user.email= this.userForm.get('email').value;
    this.user.address= this.userForm.get('address').value;

    this.usersData.updateUserByNationalId(this.user.nationalid, this.user);
    
    console.log(this.user);
    console.log(Object.values( this.usersData.getUsers()));

    console.log(this.users);
    
    this.http.updateUser(this.user).subscribe(
      (result) => {
        console.log(`User updated successfully: ${result}`);
        alert("User Updated Successfully")
      },
      (error) => {
      console.log(`Error creating user: ${error}`);
        alert("Error in updating user");
      }
    );

  }
}
