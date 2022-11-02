import { Component} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {



  slidesFirst = [
    {img: "assets/img/services/Slider/slider-1-1.JPG"},
    {img: "assets/img/services/Slider/slider-1-2.JPG"},
    {img: "assets/img/services/Slider/slider-1-3.JPG"},
    {img: "assets/img/services/Slider/slider-1-4.JPG"},
    {img: "assets/img/services/Slider/slider-1-5.JPG"},
    {img: "assets/img/services/Slider/slider-1-6.JPG"},
    {img: "assets/img/services/Slider/slider-1-7.JPG"},
    {img: "assets/img/services/Slider/slider-1-8.JPG"},
    {img: "assets/img/services/Slider/slider-1-9.JPG"},
    {img: "assets/img/services/Slider/slider-1-10.JPG"},
    {img: "assets/img/services/Slider/slider-1-11.JPG"},
    {img: "assets/img/services/Slider/slider-1-12.JPG"}
  ]

  slidesSecond = [
    {img: "assets/img/services/Slider/slider-2-1.JPG"},
    {img: "assets/img/services/Slider/slider-2-2.JPG"},
    {img: "assets/img/services/Slider/slider-2-3.JPG"},
    {img: "assets/img/services/Slider/slider-2-4.JPG"},
    {img: "assets/img/services/Slider/slider-2-5.JPG"},
    {img: "assets/img/services/Slider/slider-2-6.JPG"},
    {img: "assets/img/services/Slider/slider-2-7.JPG"},
    {img: "assets/img/services/Slider/slider-2-8.JPG"},
    {img: "assets/img/services/Slider/slider-2-9.JPG"},
    {img: "assets/img/services/Slider/slider-2-10.JPG"},
    {img: "assets/img/services/Slider/slider-2-11.JPG"},
    {img: "assets/img/services/Slider/slider-2-12.JPG"},
    {img: "assets/img/services/Slider/slider-2-13.JPG"},
  ]

  slidesThird = [
    {img: "assets/img/services/Slider/slider-3-1.JPG"},
    {img: "assets/img/services/Slider/slider-3-2.JPG"},
    {img: "assets/img/services/Slider/slider-3-3.JPG"},
    {img: "assets/img/services/Slider/slider-3-4.JPG"},
    {img: "assets/img/services/Slider/slider-3-5.JPG"},
    {img: "assets/img/services/Slider/slider-3-6.JPG"},
    {img: "assets/img/services/Slider/slider-3-7.JPG"},
    {img: "assets/img/services/Slider/slider-3-8.JPG"},
    {img: "assets/img/services/Slider/slider-3-9.JPG"},
    {img: "assets/img/services/Slider/slider-3-10.JPG"}
  ]

  customOptions: OwlOptions = {
    items: 3,
    dots: true,
    nav: true,
    loop: false,
    margin: 20,
    navText: ['<i class="fa-regular fa-angle-left"></i>', '<i class="fa-regular fa-angle-right"></i>']
  }


}
