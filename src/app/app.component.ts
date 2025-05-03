import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScriptComponent } from './components/bootstrap/script/script.component';
import { LinkComponent } from './components/bootstrap/link/link.component';
import { HeaderComponent } from './components/template/header/header.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [LinkComponent, HeaderComponent, IngredientsComponent, HomeComponent , ScriptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
