import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToDoListDraftComponent } from './to-do-list-draft/to-do-list-draft.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
import { ContactUsComponent } from './contact-us/contact-us.component'


@NgModule({
  declarations: [
    AppComponent,
    ToDoListDraftComponent,
    AddNewTaskComponent,
    NavbarComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
