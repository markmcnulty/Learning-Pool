import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private router: Router
  ) { }

  //calling it's own method so that the data will be gathered in the onInit before the screen is rendered.
  ngOnInit() {
    this.getAllUsers();
  }

  //instantialting an empty array of Users to populate from the userService get request
  allUsers: User[] = [];

  //Used when user clicks row to edit
  selectedRow: any;


  getAllUsers() {

    this._userService.getUsers()
      .subscribe(
        data => {
          this.allUsers = data,
            console.log('Succesfully Retreived Users!', data)
        },
        error => console.error('Error', error)
      )

    //returnng the list so it can be got in onInit
    return this.allUsers;
  }

  //this gets called when a table row is clicked
  editUser() {
    this.router.navigate(['edit-user']);
  }

  //This takes the data gathered in the row which is highlighted
  highlightRow(user: any) {
    console.log('Highlight row log user');
    console.log(user);
    this.selectedRow = user.fname;
    //passing data to the data storage to retreive in the edit component
    sessionStorage.setItem('userDetails', JSON.stringify(user));
    return user;
  }
}
