import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss']
})
export class LicensesComponent {

  licenses: Array<{
    pdfLink: string,
    img: string,
    text: string
  }> = [
    {
      pdfLink: 'assets/img/licenses/lic-1.pdf',
      img: 'assets/img/licenses/lic-prev-1.jpg',
      text: 'Ліцензія'
    },
    {
      pdfLink: 'assets/img/licenses/decl-1.pdf',
      img: 'assets/img/licenses/decl-prev-1.jpg',
      text: 'Декларація №1'
    },
    {
      pdfLink: 'assets/img/licenses/decl-2.pdf',
      img: 'assets/img/licenses/decl-prev-2.jpg',
      text: 'Декларація №2'
    },
    {
      pdfLink: 'assets/img/licenses/decl-3.pdf',
      img: 'assets/img/licenses/decl-prev-3.jpg',
      text: 'Декларація №3'
    },
    {
      pdfLink: 'assets/img/licenses/dozvil-1.pdf',
      img: 'assets/img/licenses/dozvil-1.jpg',
      text: 'Дозвіл №1'
    },
    {
      pdfLink: 'assets/img/licenses/dozvil-2.pdf',
      img: 'assets/img/licenses/dozvil-2.jpg',
      text: 'Дозвіл №2'
    },
    {
      pdfLink: 'assets/img/licenses/dozvil-3.pdf',
      img: 'assets/img/licenses/dozvil-3.jpg',
      text: 'Дозвіл №3'
    },
    {
      pdfLink: 'assets/img/licenses/dozvil-4.pdf',
      img: 'assets/img/licenses/dozvil-4.jpg',
      text: 'Дозвіл №4'
    },
  ]

}
