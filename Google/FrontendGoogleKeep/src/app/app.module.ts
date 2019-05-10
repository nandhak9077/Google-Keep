import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule, MatMenuModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AppMaterial  } from "./app.material.module";
import { Component} from '@angular/core';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AddnoteComponent } from './components/addnote/addnote.component';
import {IconListComponent } from './components/icon-list/icon-list.component';
import { CardNotesComponent } from './components/card-notes/card-notes.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { EditlabelComponent } from './components/editlabel/editlabel.component';
import { CrudLabelComponent } from './components/crud-label/crud-label.component';
import { LabelComponent } from './components/label/label.component';
import { SearchPipePipe } from './services/search-pipe.pipe';
import { EmptyTrashComponent } from './components/empty-trash/empty-trash.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { ProfileDialogComponent } from './components/profile-dialog/profile-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
//import * as firebase from "firebase/app";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
  
    AddnoteComponent,
    IconListComponent,
    CardNotesComponent,
    EditCardComponent,
    ArchiveComponent,
    TrashComponent,
    RemindersComponent,
    EditlabelComponent,
    LabelComponent,
    CrudLabelComponent,
    SearchPipePipe,
    EmptyTrashComponent,
    ProfilePictureComponent,
    ProfileDialogComponent
  

  ],
  imports: [
    BrowserModule,
    DragAndDropModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    ImageCropperModule,

    MatSelectModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSnackBarModule,
    AppMaterial,
    

  ],
  providers: [
    // { provide: MatDialogRef, useValue: {} },
    // { provide: MAT_DIALOG_DATA, useValue: [] },
    // ...
  ],
  entryComponents: [
    EditCardComponent,EditlabelComponent,CrudLabelComponent,EmptyTrashComponent,ProfilePictureComponent,ProfileDialogComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
