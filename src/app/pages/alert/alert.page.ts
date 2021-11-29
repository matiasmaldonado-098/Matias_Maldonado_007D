import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  todo_cargando:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  option = {
    slidesPerView:1.1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 5,
    autoplay: true,
    
  }
}
