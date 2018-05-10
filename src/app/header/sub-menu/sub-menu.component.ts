///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LinkService} from '../../common/link.service';

@Component({
  selector: '[sf-sub-menu]',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  @Output() closedSubMenu = new EventEmitter<any>();
  collection: {key: string, text: string};
  category: any;

  constructor(private linkService: LinkService) { }

  ngOnInit() {
    this.collection = this.linkService.getCollection();
    this.linkService.getCategory().subscribe(data => { this.category = data; });
  }

  onClick() {
    this.closedSubMenu.emit();
  }

}
