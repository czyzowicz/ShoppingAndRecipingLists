import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selectedRecipes = new EventEmitter<boolean>();
    @Output() selectedShoppingList = new EventEmitter<boolean>();

    changeForRecipies() {
        this.selectedRecipes.emit(true);
    }
    changeForShoppingList() {
        this.selectedShoppingList.emit(true);
    }
}