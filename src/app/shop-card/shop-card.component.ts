import { Component , Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingPipe } from '../rating.pipe';


@Component({
  selector: 'app-shop-card',
  standalone: true,
  imports: [RouterLink, RatingPipe],
  templateUrl: './shop-card.component.html',
  styleUrl: './shop-card.component.css'
})
export class ShopCardComponent {
  @Input() items: any;
  
  
}
