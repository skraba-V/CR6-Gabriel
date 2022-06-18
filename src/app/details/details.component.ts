import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { typeDishes } from '../typeDishes';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dishes: typeDishes = {} as typeDishes;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: DishService) {
    // this.CS = new CartService;
  }

  addToCart() {
    alert("added to cart");
    this.CS.addToCart(this.dishes);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]; // + == Number()
      this.dishes = dishes[this.id];
    })
  }

}
