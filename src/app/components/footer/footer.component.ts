import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  scrollHandler(id: string) {
    const elem: HTMLElement | null = this.document.getElementById(id)
    if (elem) {
      (elem as HTMLElement).scrollIntoView({behavior: "smooth"})
    }
  }


}
