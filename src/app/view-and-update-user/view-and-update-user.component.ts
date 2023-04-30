import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customer } from '../classes/customer';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-view-and-update-user',
  templateUrl: './view-and-update-user.component.html',
  styleUrls: ['./view-and-update-user.component.css']
})
export class ViewAndUpdateUserComponent {
  public userForm: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
   user: any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
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

  }
}
