import {Component} from '@angular/core';
import {MobileService} from "../../mobile.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {

  customOptions: OwlOptions = {
    dots: true,
    nav: false,
    loop: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      620: {
        items: 2
      },
      960: {
        items: 3
      },
    }
  }

  imageList: Array<{
    src: string,
    name: {title: string, subtitle?:string},
    isSelect: boolean
  }> = [
    {
    src: '../../../assets/img/reviews/review-1.jpg',
    name: {
      title: 'ГПУ ПГВ',
      subtitle: 'Облаштування Семенцівського НКГР',
    },
    isSelect: true
  },
    {
    src: '../../../assets/img/reviews/review-2.jpg',
    name: {
      title: 'ГПУ ПГВ',
      subtitle:  'Облаштування Копилівського ГКР',
    },
    isSelect: false
  },
    {
    src: '../../../assets/img/reviews/review-3.jpg',
    name: {
      title: 'ГПУ ПГВ',
      subtitle:  'Облаштування Березівського ГКР з обсягами',
    },
    isSelect: false
  },
    {
    src: '../../../assets/img/reviews/review-8.jpg',
    name: {
      title: 'ГПУ ПГВ',
      subtitle: '',
    },
    isSelect: false
  },
    {
    src: '../../../assets/img/reviews/review-5.jpg',
    name: {
      title: 'Відгук Компанія Велкор',
      subtitle: '',
    },
    isSelect: false
  },
    {
    src: '../../../assets/img/reviews/review-6.jpg',
    name: {
      title: 'Оператор ГТС України ГРС-6',
      subtitle: '',
    },
    isSelect: false
  },
    {
    src: '../../../assets/img/reviews/review-4.jpg',
    name: {
      title: 'Оператор ГТС України ГРС-6',
      subtitle: '',
    },
    isSelect: false
  },
    {
    src: '../../../assets/img/reviews/review-7.jpg',
    name: {
      title: 'Відгук PORSHE',
      subtitle: '',
    },
    isSelect: false
  },
    {
    src: '../../../assets/img/reviews/review-9.jpg',
    name: {
      title: 'ТОВ МБ ПП',
      subtitle: '',
    },
    isSelect: false
  },
    {
    src: '../../../assets/img/reviews/review-10.jpg',
    name: {
      title: 'Відгук ЮЖД',
      subtitle: '',
    },
    isSelect: false
  },

  ]

  currentImg: {
    src: string,
    name: {title: string, subtitle?:string},
    isSelect: boolean
  } = this.imageList[0]

  public isMobile!: boolean

  constructor(private mobileService: MobileService) {
    this.mobileService.isMobile$.subscribe(data => {
      this.isMobile = data
      console.log(this.isMobile)
    });
  }

  changeReviewImage(i: number): void {
    this.currentImg.isSelect = false
    this.imageList[i].isSelect = true
    this.currentImg = this.imageList[i]
  }
}
