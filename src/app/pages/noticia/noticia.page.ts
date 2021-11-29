import { NoticiaService } from 'src/app/services/noticia.service';

import { Component, OnInit } from '@angular/core';
import {Article} from '../interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {
noticias: Article[] = [];
constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.noticiaService.gettopheadlines().subscribe(resp=>{
      console.log('noticia', resp);
      //push permite añadir al arreglo cada objeto de tipo noticias obtenidas desde el servicio.

      this.noticias.push(...resp.articles);
    });
  }

}
