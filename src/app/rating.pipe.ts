import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {

  transform(rating: number): string {
  
  let fullStars = Math.floor(rating);
  let halfStar = rating % 1 >= 0.5 ? 1 : 0;
  let emptyStars = 5 - fullStars - halfStar;
  
  let stars = '';
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fa-solid fa-star text-warning"></i>';
  }
  if (halfStar) {
    stars += '<i class="fa-solid fa-star-half-stroke text-warning"></i>';
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="fa-regular fa-star text-white"></i>';
  }
  
  return stars;
    }
  }
  
