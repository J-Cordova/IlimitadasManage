import { PaymentUpdateService } from './shared/payment-update.service';
import { PaymentDialogComponent } from './student-detail/payment-dialog/payment-dialog.component';
import { StudentUpdateService } from './shared/student-update.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentSideNavComponent } from './student-sidenav/student-sidenav.component';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { StudentService } from './shared/student.service';
import { StudentSelectedService } from './shared/student-selected.service';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    StudentSideNavComponent,
    StudentDetailComponent,
    PaymentDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdNativeDateModule
  ],
  providers: [StudentService, StudentSelectedService, StudentUpdateService, PaymentUpdateService],
  entryComponents: [DialogComponent,PaymentDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
