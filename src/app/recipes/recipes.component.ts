///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LinkService} from '../common/link.service';

@Component({
  selector: '[sf-recipes]',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  activeCategory: string;
  recipes: any;

  constructor(private activatedRoute: ActivatedRoute, private linkService: LinkService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      rout => {
          this.activeCategory = rout.id;
          this.linkService.getRecipes(this.activeCategory).subscribe(data => this.recipes = data);
        }
      );
  }
}
