import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Config, ConfigService } from '../config.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;

  data: Config;
  response: string;

  constructor( 
    private formBuilder: FormBuilder,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required],
        website: [''],
        github: [''],
        twitter: [''],
        linkedin: [''],
        testmode: ['']
    });
  }
  
  getErrorMessage(controlName: string) {
    return this.profileForm.get(controlName).hasError('required') ? 'You must enter a value' :
            this.profileForm.get(controlName).hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    this.data = this.profileForm.value;
    console.warn(this.data);
    this.configService.applyJob(this.data).subscribe((data) => this.response = data);
  }

}