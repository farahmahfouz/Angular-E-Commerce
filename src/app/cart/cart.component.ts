import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  decreaseCounter(productId: number) {
    const item = this.cartItems.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(productId, item.quantity - 1);
    }
  }

  increaseCounter(productId: number) {
    const item = this.cartItems.find(item => item.id === productId);
    if (item) {
      this.cartService.updateQuantity(productId, item.quantity + 1);
    }
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId);
  }

  getTotalPriceForItem(item: any): string {
    return this.cartService.getTotalPriceForItem(item).toFixed(2);
  }

  getTotalPrice(): string {
    return this.cartItems.reduce((total, item) => total + parseFloat(this.getTotalPriceForItem(item)), 0).toFixed(2);
  }
}
