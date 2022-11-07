import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {MobileService} from "../../mobile.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  burgerIsClose: boolean = true

  public isMobile!: boolean

  constructor(private mobileService: MobileService) {
    this.mobileService.isMobile$.subscribe(data => {
      this.isMobile = data
      console.log(this.isMobile)
    });
  }
}
