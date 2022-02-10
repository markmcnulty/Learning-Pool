import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  user = new User;

  submitted = false;

  constructor(private _userService: UserService) { }

  //submitting the data using the user.service
  onSubmit() {
    this.submitted = true;
    
    this._userService.deleteUser(this.user._id)
      .subscribe(
        data => console.log('Success - User Deleted', data),
        error => console.error('Error', error)
      )
  }
}
