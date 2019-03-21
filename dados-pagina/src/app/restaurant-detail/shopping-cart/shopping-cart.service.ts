import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartService implements OnInit {
  
  items: CartItem[] = []

  constructor() { }

  ngOnInit() {
  }

  clear(){
    this.items = []
  }

  addItem(item: MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
    if(foundItem){
        foundItem.quantity = foundItem.quantity +1
    }else{
        this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number{
    return this.items
    .map(item => item.value())
    .reduce((prev, value)=> prev + value, 0)
  }

}
