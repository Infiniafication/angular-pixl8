import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { JobComponent } from './job/job.component';

@NgModule({
  imports:      [ 
    BrowserModule, BrowserAnimationsModule, 
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule
    ],
  declarations: [ AppComponent, JobComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfigService]
})
export class AppModule { }
