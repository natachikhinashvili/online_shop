import { Component, OnInit, Input } from '@angular/core';
import AddToCart from '../add.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [AddToCart]
})
export class CartComponent implements OnInit {
  @Input() incart : { name : string, price : string}[] = []
  constructor(private cart: AddToCart) { }

  ngOnInit(): void {
  }

}
