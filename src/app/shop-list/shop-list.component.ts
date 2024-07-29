import { RequestsdataService } from './../services/requestsdata.service';
import { ShopCardComponent } from './../shop-card/shop-card.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [ShopCardComponent],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent {

  items: any;
  constructor(private  requestsDataService: RequestsdataService){}

  ngOnInit(){
    this.requestsDataService.getCardsList().subscribe((res => this.handleData(res)))
  }

  handleData(item: any){
    this.items = item.products
  }
}
