import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { typeDishes } from '../typeDishes';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  kunde = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
  });

  

  some: Array<typeDishes> = [];
  total: number = 0;
  look: number = 0;
  bth: number = 0;
  free: number = 0;
  one: number = 0;

  constructor(private CS : DishService) { }

  onSubmit() {
    if (this.kunde.valid) {
       window.alert('Order is accept');

    }
  }


  ngOnInit(): void {
    this.some = this.CS.getCart();
    this.total = this.CS.sumtotal();
    this.look = this.CS.service();
    this.bth = this.CS.booth();
    this.free = this.CS.fre();
    this.one = this.CS.last();
  }
 
}
