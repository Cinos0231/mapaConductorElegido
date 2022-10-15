import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[]=[];

  constructor() { }

  ngOnInit(): void {
    // this.items = [
    //   {
    //     id: 0,
    //     origen: 'Origen',
    //     destino: 'Destino',
    //     price: 0,
    //     kilometer: 20,
    //     completed: false,
    //   }
    // ];
  }

}
