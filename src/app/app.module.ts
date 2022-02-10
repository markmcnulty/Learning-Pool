import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ListUserComponent } from './list-user/list-user.component';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUsersComponent,
    DeleteUserComponent,
    EditUserComponent,
    HeaderComponentComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
