import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResetComponent } from './components/reset/reset.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AddnoteComponent} from './components/addnote/addnote.component';
import { from } from 'rxjs';
import { ArchiveComponent } from './components/archive/archive.component';
import { CardNotesComponent } from './components/card-notes/card-notes.component'
import { TrashComponent  } from './components/trash/trash.component'
import { RemindersComponent } from './components/reminders/reminders.component'
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'reset/:token',component:ResetComponent
  },
  {
    path:'forgot',component:ForgotComponent
  },
  {
    path:'propic',component:ProfilePictureComponent
  },
  
  {
    path:'dashboard',component:DashboardComponent,

children:[
      {
        path:'',
        redirectTo : 'addnote',
        pathMatch : 'full'
      },
      {
        path:'addnote',
        component:AddnoteComponent
      },
      {
        path:'archive',
        component:ArchiveComponent
      },
      {
        path:'reminders',
        component:RemindersComponent
      },
      {
        path:'trash',
        component:TrashComponent
      },
      {
        path : 'cardnotes',
        component:CardNotesComponent
      }
      
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
