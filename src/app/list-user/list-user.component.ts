import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  user = new User;
  submitted = false;
  singleUser:any;
  dataToEdit:any;
  obj:any;


  constructor(
    private _userService: UserService,
    private router: Router    
    ) { }

  ngOnInit() {
    //getting the data to edit passed from the list all users component
    this.dataToEdit = sessionStorage.getItem('userDetails');

      this.obj = JSON.parse(this.dataToEdit);

      this.user = new User(
        this.obj.fname,
        this.obj.lname,
        this.obj.email,
        this.obj.phone_number
      );
      console.log('Single user to list');
      console.log(this.user);
  }

  //submitting the data using the user.service
  onSubmit() { 
    this._userService.getUser(this.user._id)
    .subscribe(
      data => {
        this.singleUser = data,
        console.log('User Retreived', data);
        this.submitted = true;
      },
      error => console.error('Error', error)
    )
    }
}
