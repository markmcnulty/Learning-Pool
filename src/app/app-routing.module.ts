import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: 'delete-user', component: DeleteUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: '', redirectTo: '/add-user', pathMatch: 'full' },
  { path: '**', redirectTo: '/add-user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
