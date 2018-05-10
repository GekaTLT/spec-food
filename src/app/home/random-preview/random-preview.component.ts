import {Component, Input, OnInit} from '@angular/core';
import {LinkService} from '../../common/link.service';

@Component({
  selector: '[sf-random-preview]',
  templateUrl: './random-preview.component.html',
  styleUrls: ['./random-preview.component.scss']
})
export class RandomPreviewComponent implements OnInit {

  @Input() key: string;
  @Input() name: string;
  recipes: any;

  constructor(private linkService: LinkService) { }

  ngOnInit() {
    this.linkService.getRandomRecipes(this.key).subscribe(data => this.recipes = data);
  }

}
