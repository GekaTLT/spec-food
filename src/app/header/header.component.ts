
import {Component, OnInit} from '@angular/core';

import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: '[sf-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}
  statusSubMenu: boolean;


  setStatusSubMenu() {
    this.statusSubMenu = !this.statusSubMenu;
  }

  ngOnInit(): void {
    window.onscroll = () => {
      const elem: any = document.querySelector('.header__nav--wrapper');
      elem.style.position = 'static';
      if (window.scrollY >= elem.getBoundingClientRect().top) {
        elem.style.position = 'fixed';
      }
    };

    this.router.events.pipe(
      filter(elem => elem instanceof NavigationEnd)
    ).subscribe(elem => elem['url'] === '/' ? this.statusSubMenu = false : null);
  }

}
