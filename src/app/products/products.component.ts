import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import AddToCart from '../add.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  product : {name : string} = {name:''};
  items : any
  paramsSubscription : any;
  constructor(
    private route: ActivatedRoute,
    private addtocart: AddToCart,
  ) {}

  ngOnInit(): void {
    this.items = this.addtocart.products
    this.product = {
      name: this.route.snapshot.params['id']
    };
    this.paramsSubscription = this.route.params
      .subscribe(
        (params : Params) => {
          this.product.name = params['id']
        }
      )
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe()
  }

  add(){
    this.addtocart.addToArray(this.items[0].name, this.items[0].price, this.items[0].count)
  }

}
