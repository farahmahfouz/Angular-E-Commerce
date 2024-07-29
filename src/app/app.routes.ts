import { Routes } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';





export const routes: Routes = [
    {
        path: '',
        component: ShopListComponent,
        title: 'Products Lists'
    },
    {
        path: 'products-details/:id',
        component: ProductsDetailsComponent,
        title: 'Products Details'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Resigter'
        
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Add To Cart'
    },
    {
        path: '**',
        component: NotfoundComponent,
        title: 'Page Not Found'
    }
    

];
