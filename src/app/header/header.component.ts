import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  totalItems = 0;
  constructor(private counterService: CounterService , private cartService: CartService){}

  ngOnInit(){
    this.cartService.cartItems$.subscribe(items => {
      this.totalItems = items.reduce((total, item) => total + item.quantity, 0);
    })
  }
}
