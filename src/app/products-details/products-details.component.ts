import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsdataService } from '../services/requestsdata.service';
import { RatingPipe } from '../rating.pipe';
import { CounterService } from '../services/counter.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [RatingPipe],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {
  itemsDetails: any;
  counter = 0;

  constructor(
    private requestsDataService: RequestsdataService,
    private counterService: CounterService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['id'];
      this.requestsDataService.getCardsDetails(productId).subscribe((res) => {
        this.itemsDetails = res;
        console.log(this.itemsDetails);

        this.counterService.getCount().subscribe((res) => {
          this.counter = res;
        });
      });
    });
  }

  increaseCounter() {
    this.counter++;
    this.cartService.updateQuantity(this.itemsDetails.id, this.counter);
  }

  decreaseCounter() {
    if (this.counter > 1) {
      this.counter--;
      this.cartService.updateQuantity(this.itemsDetails.id, this.counter);
    }
  }

  addToCart() {
    this.cartService.addToCart(this.itemsDetails, this.counter);
  }
}
