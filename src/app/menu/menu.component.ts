import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { typeDishes } from '../typeDishes';
import { DishService } from '../dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Array<typeDishes>= dishes;

  constructor(private route: ActivatedRoute,private dishService: DishService) { }
  addToCart(obj: typeDishes) {
    window.alert('Your product has been added to the cart!');
    this.dishService.addToCart(obj);
  }


  ngOnInit(): void {
  }

}
