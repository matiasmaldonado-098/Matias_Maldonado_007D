import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../pages/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

gettopheadlines()
{
  return this.http.get<RespuestaToHeadLines>
  ('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=888736f67f9d47aca36c25ea048a0370');
}


}
