import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

export const routes: Routes = [
    {
       path: "",
       component: HomeComponent
    },
    {
        path: "ingredients",
        component: IngredientsComponent
    }


];
