import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkout: any = ''
  submitted = false
  constructor() {
  }

  ngOnInit(): void {
    this.checkout = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.max(50),  Validators.min(3)]),
      'address' : new FormControl(null, [Validators.required, Validators.max(250),  Validators.min(3)]),
      'phone-number': new FormControl(null, [Validators.required]),
      'delievery-time' : new FormControl(null, [Validators.required]),
      'Comment': new FormControl(null)
    })
  }
  submit(val:any){
    console.log(this.checkout.controls['name'])
  }
}