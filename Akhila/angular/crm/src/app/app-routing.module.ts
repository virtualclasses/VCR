import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { CallsComponent } from './calls/calls.component';
import { LeadsComponent } from './leads/leads.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeComponent } from './employee/employee.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'',redirectTo:'register' ,pathMatch:"full"},
{path:'accounts',component:AccountsComponent},
{path:'contacts',component:ContactsComponent},
{path:'documents',component:DocumentsComponent},
{path:'calls',component:CallsComponent},
{path:'leads',component:LeadsComponent},
{path:'opportunities',component:OpportunitiesComponent},
{path:'profile',component:ProfileComponent},
{path:'employee',component:EmployeeComponent},
{path:'support',component:SupportComponent},
{path:'about',component:AboutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
