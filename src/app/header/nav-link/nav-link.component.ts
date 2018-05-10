import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LinkService} from '../../common/link.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: '[sf-nav-link]',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {

  constructor(private linkService: LinkService, private router: Router) { }

  @Input() key: string;
  @Input() text: string;

  ngOnInit() {
    this.router.events.pipe(
      filter(elem => elem instanceof NavigationEnd)
    ).subscribe(elem => {
      const key = elem['url'].split('/');
      if (key[1] === this.key) {
        this.linkService.setCollection(this.key, this.text);
      }
    });
  }
}
