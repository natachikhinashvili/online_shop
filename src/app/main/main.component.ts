import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import AddToCart from '../add.service';
import { IsauthorisedService } from '../isauthorised.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [AddToCart, IsauthorisedService]
})
export class MainComponent implements OnInit {
  products : { name : string, photoURL: any ,price : string, count: number}[] = []
  phones : { name : string, photoURL: any ,price : string, count: number}[] = []
  computers : { name : string, photoURL: any ,price : string, count: number}[] = []  
  tvs : { name : string, photoURL: any ,price : string, count: number}[] = []


  title = 'online-shop';
  name = new FormControl('');
  islogin : boolean = false
  selected = ''
  constructor(
    private addtocart: AddToCart,
    private http: HttpClient
    ) { }
  ngOnInit(): void {
    this.products = this.addtocart.products
    this.phones = this.addtocart.phones
    this.computers = this.addtocart.computers
    this.tvs = this.addtocart.TV
  }
  changeselect(value : string){
    this.selected = value;
  }
  
  add(name: string, price: string, count: number){
    this.addtocart.addToArray(name, price, count)
  }
}
