import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[sf-recipe-is-open]',
  templateUrl: './recipe-is-open.component.html',
  styleUrls: ['./recipe-is-open.component.scss']
})
export class RecipeIsOpenComponent implements OnInit {

  @Input() recipe: any;
  @Input() imgUrl: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
