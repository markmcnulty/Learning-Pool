import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {

  constructor(private _userService: UserService,
    private router: Router
  ) { }

  user = new User('', '', '', '');
  submitted = false;
  singleUser: any;


  //submitting the data using the user.service
  onSubmit() {
    try {
      this._userService.getUser(this.user._id)

        .subscribe(

          data => {
            this.singleUser = data,
              console.log('User Retreived', data);
            this.submitted = true;
            sessionStorage.setItem('userDetails', JSON.stringify(data));
            //If successful then routing to the single user component
            this.router.navigate(['list-user']);
          },
          error => {
            console.error('Error', error),
              console.log('No user retreived');
          }
        )
    }
    catch (e) {
      console.log(e);
    }
  }
}
