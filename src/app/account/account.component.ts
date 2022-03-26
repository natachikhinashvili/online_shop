import { Component, OnInit } from '@angular/core';
import { IsauthorisedService } from '../isauthorised.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [IsauthorisedService]
})

export class AccountComponent implements OnInit {
  signupform: any = ''
  constructor() { }

  ngOnInit(): void {
    this.signupform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }
  login(){
  }
}
