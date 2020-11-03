import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ifRecipesComponent: boolean;
  ifShopingListComponent: boolean;

  navigateRecipes(ifRecipes: boolean) {
    this.ifRecipesComponent = ifRecipes;
    this.ifShopingListComponent = !ifRecipes;
  }

  navigateShoppingList(ifShoppingList: boolean) {
    this.ifShopingListComponent = ifShoppingList;
    this.ifRecipesComponent = !ifShoppingList;
  }

}
