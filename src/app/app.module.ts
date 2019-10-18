import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditorComponent } from './shopping-list/shopping-editor/shopping-editor.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropDownDirective } from './shared/drop-down.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, RecipesComponent, RecipeDetailComponent, RecipeListComponent, ShoppingListComponent, ShoppingEditorComponent, RecipeItemComponent, DropDownDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ShoppingListService]
})
export class AppModule { }
