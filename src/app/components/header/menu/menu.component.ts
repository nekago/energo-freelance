import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  scrollHandler(id: string) {
    const elem: HTMLElement | null = this.document.getElementById(id)
    if (elem) {
      (elem as HTMLElement).scrollIntoView({behavior: "smooth"})
    }
  }

}
