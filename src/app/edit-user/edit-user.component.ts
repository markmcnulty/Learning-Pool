import { User } from '../user';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  submitted = false;

  dataToEdit: any;
  obj: any;
  user: any;

  constructor(
    private _userService: UserService
  ) {
  }


  ngOnInit() {
    //getting data to from session storage from list users so I can edit.
    this.dataToEdit = sessionStorage.getItem('userDetails');

    //parsing the data then to a json abject to manipulate
    this.obj = JSON.parse(this.dataToEdit);

    this.user = new User(
      this.obj.fname,
      this.obj.lname,
      this.obj.email,
      this.obj.phone_number
    );
  }

  //submitting the data using the user.service
  onSubmit() {

    this.submitted = true;

    this._userService.updateUser(this.obj._id, this.user)
      .subscribe(
        data => {
          this.user = data
        },
        error => console.error('Error', error)

      )
    console.log(this.user);
  }
}
