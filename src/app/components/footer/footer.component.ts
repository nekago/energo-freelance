import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  showCallbackModal: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient) {

  }

  scrollHandler(id: string) {
    const elem: HTMLElement | null = this.document.getElementById(id)
    if (elem) {
      (elem as HTMLElement).scrollIntoView({behavior: "smooth"})
    }
  }


  sendMail(e: any) {
    e.preventDefault()
    const mail = e.target[0].value
    const phone = e.target[1].value
    if (!mail || !phone) {
      return
    }
    this.http.post("https://energo-callback.onrender.com", {mail, phone}).subscribe();
    e.target.reset()
    this.showCallbackModal = true
    setTimeout(() => {
      this.showCallbackModal = false
    }, 1500)
  }
}
