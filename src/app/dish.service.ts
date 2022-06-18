import { Injectable } from '@angular/core';
import { typeDishes } from './typeDishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  some: Array<typeDishes> = [];
  total: number = 0;
  look: number = 0;
  bth: number = 0;
  free: number = 0;
  one: number = 0;

  constructor() { }

  addToCart(dish: typeDishes) {
    this.some.push(dish);
  }

  getCart() {
    return this.some;
  }

  clearCart() {
    this.some = [];
    return this.some;
  }

  sumtotal() {
      for (let val of this.some){
            this.total += val.price;

      }
    return this.total;
  }

  service() {
      for (let val of this.some){
            this.look += val.price*0.1;
        

      } 
        return this.look; 
  }

  booth() {
      for (let val of this.some){
            this.bth = (this.look)+(this.total);
        

      } 
        return this.bth; 
  }

  fre() {

    if (this.total > 40) {
      this.free = this.total*0.15;
    }
        return this.free; 
  }

  last() {
    if (this.total > 40) {
            this.one = this.bth-this.free;
        

      } 
        return this.one; 
  }
 
 


 


}
