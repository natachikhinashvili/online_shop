import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export default class AddToCart{
    phones = [
        {
          name : 'Apple iphone 13',
          price : '3 399 ₾',
          photoURL : 'apple-iphone-13.jpeg',
          count : 0
        },
        {
          name : 'Apple iphone 12', 
          price : '2 799 ₾',
          photoURL : 'apple-iphone12.png',
          count : 0
        }, 
        {
          name : 'Apple iphone 11', 
          price : '2 179 ₾',
          photoURL : 'apple-iphone11.png',
          count : 0
        }, 
        {
          name : 'Apple iphone XR', 
          price : '1 999 ₾',
          photoURL : 'apple-iphonex.jpeg',
          count : 0
        }
    ];

    computers = [
      {
        name : 'Apple Macbook Air 13', 
        price : '3 399 ₾',
        photoURL : 'Apple Macbook Air 13.webp',
        count : 0
      },
      {
        name : 'Apple macbook pro', 
        price : '5 199 ₾',
        photoURL : 'Apple macbook pro.webp',
        count : 0
      },
      {
        name : 'Lenovo V14', 
        price : '1 699 ₾',
        photoURL : 'Lenovo V14.jpeg',
        count : 0
      }
    ];

    TV = [
      {
        name : 'Xiaomi MI TV Q1 75 EU', 
        price : '4 399 ₾',
        photoURL : 'Xiaomi MI TV Q1 75 EU.jpeg',
        count : 0
      },
    ];

    products = [
      ...this.phones,
      ...this.computers, 
      ...this.TV
    ]
    cart_array : {name : string, price: string, count: number}[] = [];
    called = 0
    arr : any[]= []
    addToArray(name: string, price: string, count: number){
      count+=1
      this.called++;
      if ( this.called === 1 ) {

        this.cart_array.push({ name: name, price: price, count: count });
        this.arr.push(name);

      } else if (this.called > 1) {
          if(this.arr.indexOf(name) === -1){
            this.cart_array.push({ name: name, price: price, count: count });
            this.arr.push(name)
          }else{
            for(let i of this.cart_array){
              if(i.name === name){
                i.count += 1
              }
            }
          }
      }
    }
}