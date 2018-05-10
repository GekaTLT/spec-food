///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
///<reference path="../../../../node_modules/@angular/router/src/router.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: '[sf-recipe]',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe;
  imgUrl: Array<string>;
  moveMouse = false;
  styleOpen: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.recipe.img || !this.recipe.img[0]) {
      this.imgUrl = ['dont_img.png'];
    } else {
      this.imgUrl = this.recipe.img;
    }
    this.activatedRoute.queryParams.subscribe(data => {
      if (data.id == this.recipe._id) {
        this.styleOpen = {
          boxSizing: 'border-box',
          margin: 0,
          marginBottom: '50px',
          width: '90vw',
          height: 'auto',
          position: 'absolute',
          zIndex: 50,
          left: '5vw',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)'};
      } else {
        this.styleOpen = false;
      }
    });
  }

  onClick() {
    if (!this.styleOpen) {
      this.router.navigate([], { queryParams: {id: this.recipe._id} });
    } else {
      this.router.navigate([], { queryParams: {} });
    }
  }

}
