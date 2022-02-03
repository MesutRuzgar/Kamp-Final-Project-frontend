import { Injectable } from '@angular/core';
import { CartItem } from '../models/carItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quantity+=1;
    }else{
      let carItem=new CartItem();
      carItem.product= product;
      carItem.quantity=1;
      CartItems.push(carItem)
    }
  }
  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

    list():CartItem[]{
        return CartItems;
    }
}
