import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '@angular/cli/PROJECT/src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.mindmegette.hu/images/213/O/paloc_leves.jpg'),
    new Recipe('Another recipe', 'This is simply a test', 'http://www.mindmegette.hu/images/213/O/paloc_leves.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
