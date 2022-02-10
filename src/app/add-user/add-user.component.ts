import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user = new User('', '', '', '');
  submitted = false;

  constructor(private _userService: UserService) { }

  //submitting the data using the user.service
  onSubmit() {
    this.submitted = true;

    this._userService.addUser(this.user)
      .subscribe(
        data => console.log('Success - User added', data),
        error => console.error('Error', error)
      )
    console.log(this.user);
  }

  //Resetting the fields of the form and returning to the add user page.
  newUser() {
    this.submitted = false;
    this.user = new User('', '', '', '');
  }
}


