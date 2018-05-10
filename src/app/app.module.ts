import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {LinkService} from './common/link.service';
import { SubMenuComponent } from './header/sub-menu/sub-menu.component';
import { NavLinkComponent } from './header/nav-link/nav-link.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RandomPreviewComponent } from './home/random-preview/random-preview.component';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { RecipeIsOpenComponent } from './recipes/recipe/recipe-is-open/recipe-is-open.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SubMenuComponent,
    NavLinkComponent,
    RecipesComponent,
    RecipeComponent,
    RandomPreviewComponent,
    RecipeIsOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ParallaxScrollModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
