import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserRoleComponent } from './user/user-role/user-role.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", // /user geldiği zaman direkt bu çalışsın diyorum.
  component:UserListsComponent
  },
  {
    path:":id", // /bir parametre ile çağırdığım zaman direkt bu çalışsın diyorum.
  component:UserComponent, //bunun da kendi childrenları olduğundan dolayı => user-details ve user-role
  children:[
    {
      path:"details", // /user geldiği zaman direkt bu çalışsın diyorum.
    component:UserDetailsComponent
    },
    {
      path:"role", // /user geldiği zaman direkt bu çalışsın diyorum.
    component:UserRoleComponent
    },
    {
      path:"",
    redirectTo:"details", //neolursa olsun detatils'e yönlensin diyorum.
    pathMatch:"full" //tam eşleşsin diye
    }
  ]
}
]



@NgModule({
  declarations: [
    UserDetailsComponent,
    UserRoleComponent,
    UserListsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
