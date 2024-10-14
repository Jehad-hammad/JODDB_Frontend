import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RoleGuard } from 'src/auth/role.guard';
import { AddUsersComponent } from './add-users/add-users.component';



const routes: Routes = [
  { component: UsersComponent, path: 'users', canActivate: [RoleGuard], data: { expectedRole: ['superadmin'] } },
  { component: AddUsersComponent, path: 'add-user', canActivate: [RoleGuard], data: { expectedRole: ['superadmin'] } },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {
}
