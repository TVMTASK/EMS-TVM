import { LoginComponent } from 'src/login/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CareerComponent } from './career/career.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CareerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,MatToolbarModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      autoDismiss: true,
      positionClass: 'toast-top-full-width',
      preventDuplicates: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
