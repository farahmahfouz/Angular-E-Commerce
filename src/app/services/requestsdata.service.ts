import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestsdataService {

  constructor(private http: HttpClient) { }

  getCardsList() {
    return this.http.get(`https://dummyjson.com/products`);
  }

  getCardsDetails(id: string) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

  addToCart(body: any){
    return this.http.post(`https://dummyjson.com/products`, body);
  }
}


